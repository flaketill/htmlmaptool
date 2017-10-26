/* global Symbol */

/* jshint undef: true, unused: true */



// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
// WHY AMD? Who use AMD? -- http://requirejs.org/docs/whyamd.html
// AMD already has good adoption on the web:

// https://getfirebug.com/
// https://embedjs.readme.io/docs/github
// http://dojotoolkit.org/
// http://enderjs.com/
// https://jquery.com/

//Calling define with a dependency array and a factory function
define( 'core', [
	"./var/support",
	"common",
], function( support, common ) {

	//"use strict";

	/**
	 * htmlmaptool
	 * ------------
	 * Version : 0.0.1
	 * Website : NULL
	 * Repo    : github.com/flaketill/htmlmaptool
	 * Author  : Armando Ibarra (@erpmtics)
	 */

	var version = "@VERSION";
	//Define the module value by returning a value.
	
	htmlmaptool.core.module = htmlmaptool.core.module || {};

	htmlmaptool.core.module = ({config: function (options){ console.log("test"); } });

	var htmlmaptool_webapp = 
		{
			models: {},
			views: {},
			controllers: {},
			routers:{},
			utils: {},
			dao: {}
		};

    htmlmaptool_webapp.version = 
    {
    	major: 0,
    	minor: 2,
    	patch: 2,
    	flag: "",
    	revision: Number("$Rev: 01 $".match(/[0-9]+/)[0]),
    	toString: function() 
    	{

    	}
    };

	//==================================
	// Main router app
	//==================================
	//
	/*
	var router_app = Backbone.Router.extend({
		initialize: function()
		{
			var url_current = $(location).attr('href');
			if(url_current == "https://erpmticspy-dev.appspot.com/facebook/")
			{
				console.log("The url current is: " + url_current);
			}

			this.route("page/:number", "app", function(number){ console.log("Testin route backbonejs")});
		}
		,routes:
		{
			"": "index"
		}
		,index: function() 
		{
			//common.TestFilter = param || '';
			console.warn("Index");
		}
	});
    
    htmlmaptool_webapp.routers.main = router_app;
    */

    //Backbone.history.start();
    
    //return htmlmaptool_webapp;

	return function () {};

} );