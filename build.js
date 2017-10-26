({
    "appDir": "src",
    "dir": "build",
    "mainConfigFile": "main.js",
    "optimize": "none",
    "normalizeDirDefines": "all",
    "skipDirOptimize": false,
    "optimizeAllPluginResources": true,
    "modules": [
        {
            "name": "htmlmaptool",
            "include": ['global',
                        'amd',
                        'core',
                        'htmlmaptool'
                        'support'
                        'common'
                        'sessionstorage'
            ],
            "exclude": ["test"]
        }
    ]
})