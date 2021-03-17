module.exports = {
    apps: [{
        name: 'loadTest',
        script: 'bin/www',
        instances: 0,
        exec_mode: 'cluster'
}]
}