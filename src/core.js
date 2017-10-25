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

(function(windows){//module pattern  encapsulated module, that cannot conflict with any other modules
	//"use strict";

	/**
	 * htmlmaptool
	 * ------------
	 * Version : 0.0.1
	 * Website : NULL
	 * Repo    : github.com/flaketill/htmlmaptool
	 * Author  : Armando Ibarra (@erpmtics)
	 */

	//this --scope
	var that =this, //Save reference to instance.
		core_deletedIds = [],
		previusHtmlmaptool = that.htmlmaptool;

	//============================================================
	// Register Namespace
	//------------------------------------------------------------
	//
	/**
	 * Top level namespace for Jasmine, a lightweight JavaScript BDD/spec/testing framework
	 * 
	 * @namespace
	 */

	var htmlmaptool;//Nested namespaces

	if ( typeof exports !== 'undefined' ) 
	{
		htmlmaptool = exports;

	} else {
			  	
			  	//Top-level namespace being assigned an object literal
			  	//Singleton
			  	// creates a class and immediately instantiates an object --JavaScript is object-based 
			  	//rather than object-oriented. 
			    htmlmaptool = that.htmlmaptool || {};//Nested namespaces
		
	}

	/**
		* Configuration
		* -------------
   */

	htmlmaptool.version ='0.0.1';
	htmlmaptool.name_app ="htmlmaptool";

	/**
	 * Show diagnostic messages in the console if set to true
	 *
	 */
	htmlmaptool.VERBOSE = false;

	// ========= UTILS =========

	//window.htmlmaptool
	htmlmaptool.prototype.map = function (callback) {

		var results = [], i = 0;
		for ( ; i < this.length; i++) {
			results.push(callback.call(this, this[i], i));
		}
    	return results;
	}

	htmlmaptool.prototype.forEach = function (callback) {
		this.map(callback);
		return this;
	}

	//API Design - Make a module
	var htmlmaptool = 
	{
        get: function (selector) {
            var els;
            if (typeof selector === 'string') {
                els = document.querySelectorAll(selector);
            } else if (selector.length) { 
                els = selector;
            } else {
                els = [selector];
            }
            return new htmlmaptool(els);
        }, 
        create: function (tagName, attrs) {
            var el = new htmlmaptool([document.createElement(tagName)]);
            if (attrs) {
                if (attrs.className) { 
                    el.addClass(attrs.className);
                    delete attrs.className;
                }
                if (attrs.text) { 
                    el.text(attrs.text);
                    delete attrs.text;
                }
                for (var key in attrs) {
                    if (attrs.hasOwnProperty(key)) {
                        el.attr(key, attrs[key]);
                    }
                }
            }
            return el;
        }
    }

    //Check LocalStorage Writable
    var testCanLocalStorage = function() {
    	var mod = 'modernizr';
    	try {
    		localStorage.setItem(mod, mod);
    		localStorage.removeItem(mod);
    		return true;
    	} catch (e) {
    		return false;
    	}
    }

    //Check SessionStorage Writable
    var checkCanSessionStorage = function() {
    	var mod = 'modernizr';
    	try {
    		sessionStorage.setItem(mod, mod);
    		sessionStorage.removeItem(mod);
    		return true;
    	} catch (e) {
    		return false;
    	}
    }

	//Utils
	htmlmaptool.utils = htmlmaptool.utils || {};

	htmlmaptool.utils = ({
		data: null
		,config: function function_name (options)
		{
			var defaultOptions = 
	    		{
	    			base_url: '/js/templates/'
				};

			if (typeof options == 'object') 
			{
				var options = options || {};
			} else {
				options = defaultOptions;
			}

			this.data = options;

		}
	});

	//Add utils 
	//htmlmaptool.utils.module = ({config: function (options){ console.log("test"); } });
	
	//Use module form core 
	htmlmaptool.core.module.config("test");

	//var core = new htmlmaptool.core.module

	return htmlmaptool;
	//}).call(this);
		
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

    /**
     * Just test 
 	*/
	htmlmaptool.test = function() {

		console.log("test funcion");
		return this;
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
	//return function () {};
	return htmlmaptool;

	}).call(this);

} );