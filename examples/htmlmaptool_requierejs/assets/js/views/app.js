/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	//'collections/',
	//'views/',
	//'text!templates/example.html',
	'common',
	'htmlmaptool'
], function ($, _, Backbone, common, htmlmaptool) {

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

			var htmlmaptool_version = htmlmaptool.version;

			console.info(htmlmaptool);

			console.info(htmlmaptool_version);

			htmlmaptool.test();

			console.info(htmlmaptool.name_app);
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			console.log("testing render view");
		}
	});

	return AppView;
});