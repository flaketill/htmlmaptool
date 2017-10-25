/* <![CDATA[ */
/*global require*/
'use strict';

require.config({
	appDir: ".",
	baseUrl: "assets/js",
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		'requirejs': ['../node_modules/requirejs/requirejs'],
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
		text: '../node_modules/requirejs-text/text',
		common: '../common',
		htmlmaptool: '../node_modules/htmlmaptool/dist/htmlmaptool',
		app: 'views/app'
	},
	shim: {
		requirejs: {
			exports: 'requirejs'
		},
		htmlmaptool: {
			exports: 'htmlmaptool'
		},			
		app: {
			deps: ['common','htmlmaptool']
		}
	}
	//deps: ['views/app']
});

require([
	'backbone',
	'app',
	//'routers/router'
//], function (Backbone, AppView, Workspace) {
], function (Backbone, AppView) {
	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	Backbone.history.start();

	// Initialize the application view
	new AppView();
});