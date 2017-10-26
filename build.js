({
    appDir: 'src',
    baseUrl: 'src',
    dir: './build',
    modules: [
        {
            name: 'htmlmaptool',
            out: "main-built.js"
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        'global': ['src/exports/global'],
        'amd': ['src/exports/amd'],
        'core': ['core'],
        'htmlmaptool': ['htmlmaptool']
        'support': ['src/var/support'],     
        'common': ['common'],
        'sessionstorage': ['src/utils/sessionstorage']
    },
    shim: {
        htmlmaptool: 
        {
            deps: [
                'global',
                'amd',
                'core',
                'support'
                'common'
                'sessionstorage'
            ],
            exports: 'htmlmaptool'
        }
    }
})