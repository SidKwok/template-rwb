module.exports = {
    template: 'handlebars',
    templateOptions: {
        helpers: {
            if_eq: function(a, b, opts) {
                return a === b
                    ? opts.fn(this)
                    : opts.inverse(this);
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
        history: {
            when: 'router',
            type: 'list',
            message: 'Pick the type of router',
            choices: [
                {
                    name: 'html5 history api',
                    value: 'browserHistory',
                    short: 'html5'
                },
                {
                    name: 'hash router',
                    value: 'hashHistory',
                    short: 'hash'
                }
            ]
        },
        redux: {
            type: 'confirm',
            message: 'Install redux?'
        },
        lint: {
            type: 'confirm',
            message: 'Use ESLint to lint your code?',
            short: 'Standard'
        }
    },
    filters: {
        'src/routes/**/*': 'router',
        'src/views/**/*': 'router',
        'src/redux/**/*': 'redux',
        'src/components/Counter.jsx': 'redux',
        'src/components/Counter.css': 'redux',
        '.eslintrc.js': 'lint',
        '.eslintignore': 'lint'
    },
    post({isNewFolder, folderName, chalk, install, init, answers}) {
        console.log(chalk.blue('\n  To get started:\n'));
        if (isNewFolder) {
            console.log(`  cd ${folderName}`);
        }
        console.log('  npm install');
        console.log('  npm run dev');

        if (answers.redux) {
            console.log(chalk.blue('\n  To make redux-devtools-extension work:\n'));
            console.log('  https://github.com/zalmoxisus/redux-devtools-extension');
        }

        console.log(chalk.blue('\n  To build for production:\n'));
        console.log('  npm run build');

        console.log(chalk.blue('\n  Documentation:\n'));
        console.log('  https://github.com/SidKwok/react-webpack-boilerplate\n');

    }
};
