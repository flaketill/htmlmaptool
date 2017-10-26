/* <![CDATA[ */
/*global require*/
//'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module		
	baseUrl: 'src',
	paths: 
	{
		//exports
		'global': ['src/exports/global'],
		'amd': ['src/exports/amd'],
		'core': ['core'],
		'htmlmaptool': ['htmlmaptool']
		'support': ['src/var/support'],		
		'common': ['common'],
		'sessionstorage': ['src/utils/sessionstorage'],
	},
	deps: ['src/htmlmaptool']
});

require([
	'global',
	'amd',
	'core',
	'htmlmaptool'
	'support'
	'common'
	'sessionstorage'
], function () {
	/*jshint nonew:false*/

	// Initialize the lib
	console.log(htmlmaptool.version);
});
/* ]]> */