/* <![CDATA[ */
/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module		
	baseUrl: 'src/',
	//baseUrl: "/js",
    //enforceDefine: true,
    waitSeconds: 15,
	paths: 
	{
		'underscore': ['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min'],
		'htmlmaptool_prod': ['../dist/htmlmaptool'],
		'htmlmaptool': ['htmlmaptool'],
		'core': ['core'],
		'amd': ['exports/amd'],
		'test': ['core/test'],
		'utils': ['core/utils'],
		'support': ['var/support'],
		'support1': ['core/support'],
		'common': ['common'],
		'sessionstorage': ['utils/sessionstorage'],
		'global': ['exports/global'],
	},
	shim: {
		underscore: {
            exports: "_"
        },
		htmlmaptool_prod: {
			exports: 'htmlmaptool',
			//deps: ['underscore']
		},
		htmlmaptool: {
			//exports: 'htmlmaptool',
			deps: ['core','test','utils']
			//deps: ['core','amd','global']
		},
		amd: {
			exports: 'amd',
		},
		global: {
			exports: 'global',
		},		
		core: {
			exports: 'core',
			//deps:['htmlmaptool']
			deps: ['amd','global']
		},
		test: {
			exports: 'test',
			//deps:['htmlmaptool','core']
			deps:['htmlmaptool','core']
		}/*,
		utils: {
			exports: 'utils'
			//deps:['htmlmaptool','core']
		}*/
		/*,
		core: {
			deps: ['amd','support','support1','common','sessionstorage','global','htmlmaptool']
		}*/
	},
	//deps: ['src/core']
	//deps: ['htmlmaptool']
});

require([
	'underscore',
	'htmlmaptool',
	'htmlmaptool_prod'
], function (_,htmlmaptool,htmlmaptool_prod) {

	/*jshint nonew:false*/

	console.log("[info] - main.js -->htmlmaptool::Initialize");
	console.log("[info] - main.js --> htmlmaptool: " + typeof htmlmaptool);

	// Initialize the lib
	if (htmlmaptool){

		//the flag was not found, so the code has not run
		var htmlmaptool_empty = _.isEmpty(htmlmaptool);

		if (htmlmaptool_empty) {
			console.log("[info] - main.js --> Fail please check dist file");
		}else{
			console.log("[info] - main.js --> ohtmlmaptool: " + typeof htmlmaptool);
			console.log("[info] - main.js --> The version are:" + htmlmaptool.version);
			htmlmaptool.test();
			//htmlmaptool.testing();
    	}
    }

});
/* ]]> */