/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'semantic',
	//'collections/',
	//'views/',
	//'text!templates/example.html',
	'common',
	'htmlmaptool'
], function ($, _, Backbone, semantic, common, htmlmaptool) {

	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#wrapper_app',

		// Compile our stats template
		//template: _.template(statsTemplate),
		initialize: function () {

			console.log("testing Backbone view");
			// Initialize the lib
			if (htmlmaptool){ //the flag was not found, so the code has not run

				var htmlmaptool_empty = _.isEmpty(htmlmaptool);

				if (htmlmaptool_empty) {

					console.log("[info] - views/app.js --> Fail please check dist file");

				}else{

					var htmlmaptool_version = htmlmaptool.version;
					console.info(htmlmaptool_version);
					htmlmaptool.test();			

					console.log("[info] - views/app.js --> htmlmaptool::Initialize");
					console.log("[info] - views/app.js --> htmlmaptool object: " + typeof htmlmaptool);
					console.log("[info] - views/app.js --> The JavaScript library are:" + htmlmaptool.name_app);
					console.log("[info] - views/app.js --> The version are:" + htmlmaptool.version);
					
					htmlmaptool.test();
					htmlmaptool.test2();
				}
			}
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			console.log("testing render view");
		}
	});

	return AppView;
});