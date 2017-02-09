module.exports = {
    template: 'handlebars',
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
            when: function(obj) {
                return obj.router;
            },
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
        }
    },
    filters: {
        'src/routes/**/*': 'router',
        'src/views／**/*': 'router'
    },
    post({isNewFolder, folderName, chalk, install, init, answers}) {
        console.log(chalk.green('\n  To get started:\n'));
        if (isNewFolder) {
            console.log(`  cd ${folderName}`);
        }
        console.log('  npm install');
        console.log('  npm run dev');

        console.log(chalk.green('\n  To build for production:\n'));
        console.log('  npm run build\n');
    }
};
