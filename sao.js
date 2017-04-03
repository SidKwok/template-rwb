module.exports = {
    template: 'handlebars',
    templateOptions: {
        helpers: {
            if_eq: function(a, b, opts) {
                return a === b ? opts.fn(this) : opts.inverse(this);
            }
        }
    },
    prompts: {
        name: {
            message: 'Project name',
            role: 'folder:name'
        },
        description: {
            message: 'Project description',
            default: 'A React project'
        },
        author: {
            message: 'Author',
            role: 'git:name'
        },
        router: {
            message: 'Install react-router?',
            type: 'confirm'
        },
        routerVersion: {
            when: 'router',
            message: 'Pick the version of router',
            type: 'list',
            choices: [
                {
                    name: 'v4',
                    value: 'v4',
                    short: 'v4'
                },
                {
                    name: 'v3',
                    value: 'v3',
                    short: 'v3'
                }
            ]
        },
        history: {
            when: 'router',
            type: 'list',
            message: 'Pick the type of router',
            choices: [
                {
                    name: 'html5 history api',
                    value: function(obj) {
                        return obj.data.root.routerVersion === 'v3'
                            ? 'browserHistory'
                            : 'BrowserRouter';
                    },
                    short: 'html5'
                },
                {
                    name: 'hash router',
                    value: function(obj) {
                        return obj.data.root.routerVersion === 'v3'
                            ? 'hashHistory'
                            : 'HashRouter';
                    },
                    short: 'hash'
                }
            ]
        },
        redux: {
            type: 'confirm',
            message: 'Install redux?'
        },
        devtools: {
            type: 'list',
            when: 'redux',
            message: 'Pick the type of DevTools',
            choices: [
                {
                    name: 'Browser Extension',
                    value: 'browser',
                    short: 'Browser'
                },
                {
                    name: 'Customized DevTools',
                    value: 'normal',
                    short: 'Normal'
                }
            ]
        },
        lint: {
            type: 'confirm',
            message: 'Use ESLint to lint your code?',
            short: 'Standard'
        },
        unit: {
            type: 'confirm',
            message: 'Unit test with jest?',
            short: 'Jest'
        }
    },
    filters: {
        'src/routes/**/*': 'router',
        'src/views/**/*': 'router',
        'src/redux/**/*': 'redux',
        'src/components/Counter.jsx': 'redux',
        'src/components/Counter.css': 'redux',
        'src/components/DevTools/**/*': 'redux && devtools === "normal"',
        '.eslintrc.js': 'lint',
        '.eslintignore': 'lint',
        'test/**/*': 'unit',
        'test/unit/.eslintrc': 'lint'
    },
    post({ isNewFolder, folderName, chalk, install, init, answers }) {
        console.log(chalk.cyan('\n  To get started:\n'));
        if (isNewFolder) {
            console.log(`  cd ${folderName}`);
        }
        console.log('  npm install');
        console.log('  npm run dev');

        if (answers.devtools === 'browser') {
            console.log(
                chalk.cyan('\n  To make redux-devtools-extension work:\n')
            );
            console.log(
                '  https://github.com/zalmoxisus/redux-devtools-extension'
            );
        }

        console.log(chalk.cyan('\n  To build for production:\n'));
        console.log('  npm run build');

        console.log(chalk.cyan('\n  Documentation:\n'));
        console.log('  https://github.com/SidKwok/react-webpack-boilerplate\n');
    }
};
