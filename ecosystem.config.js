module.exports = {
    apps: [
        {
            name: 'website',
            cwd: './website/',
            script: 'npm',
            args: 'start',
            port:'3001',
        },
        {
            name: 'admin',
            cwd: './admin/',
            script: 'npm',
            args: 'start',
            port:'8000',
        },
        {
            name: 'backend',
            cwd: './backend/',
            script: 'nodemon',
            args: 'server.js',
            port:'4002',
        },
        // optionally a second project
    ],
};