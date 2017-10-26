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
		//exports
		'core': ['core'],
		'amd': ['exports/amd'],
		'support': ['var/support'],
		'support1': ['core/support'],
		'common': ['common'],
		'sessionstorage': ['utils/sessionstorage'],
		'global': ['exports/global'],
		'htmlmaptool': ['htmlmaptool'],
		'test': ['core/test'],
	},
	shim: {
		htmlmaptool: {
			exports: 'htmlmaptool'
		}
		/*,
		test: {
			deps:['htmlmaptool']
		},
		core: {
			deps: ['amd','support','support1','common','sessionstorage','global','htmlmaptool']
		}*/
	},
	//deps: ['src/core']
	deps: ['htmlmaptool']
});

require([
	//'htmlmaptool',
	/*'core',
	'amd',
	'test',
	'support',
	'support1',
	'common',
	'sessionstorage',
	'global',*/
//], function (htmlmaptool,core,amd,support,support1,common,sessionstorage,global,test) {
], function (htmlmaptool) {
	/*jshint nonew:false*/

	// Initialize the lib
	console.log("htmlmaptool: " + typeof htmlmaptool);
	console.log("The version are:" + htmlmaptool.version);
});
/* ]]> */