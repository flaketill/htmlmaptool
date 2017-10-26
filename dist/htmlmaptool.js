/*global define*/
//'use strict';
define([], function () {
	return {
		// Which filter are we using?
		TodoFilter: '', // empty, active, completed

		// What is the enter key constant?
		ENTER_KEY: 13,
		ESCAPE_KEY: 27
	};
});;/* global Symbol */

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

} );;define( [
	"../core"
], function( htmlmaptool ) {

	//"use strict";

	// Register as a named AMD module, since htmlmaptool can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules.
	// A named AMD is safest and most robust way to register. 

	// Note that for maximum portability see:
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	// AMD define happens at the end for compatibility with AMD loaders
	// that don't enforce next-turn semantics on modules.

	/**
	 * Module Wrapper
	 * --------------
   */

	if ( typeof define === "function" && define.amd ) {
		define( "htmlmaptool", [], function() {
			return htmlmaptool;
		} );
	}

	// for CommonJS enviroments, export everything
	/*if ( typeof exports !== "undefined" || typeof require !== "undefined" ) 
	{
			extend(exports, htmlmaptool);
	}*/

} );;define( [
	"../core"
], function( htmlmaptool ) {

	//"use strict";
	// Map over htmlmaptool in case of overwrite
	var _htmlmaptool = window.htmlmaptool;

		htmlmaptool.noConflict = function( deep ) 
		{
		
			if ( window.htmlmaptool === htmlmaptool) {
				window._htmlmaptool = _htmlmaptool;
			}

			if ( deep && window.htmlmaptool === htmlmaptool ) {
				window.htmlmaptool = _htmlmaptool;
			}

			return htmlmaptool;
		};

		htmlmaptool.getGlobal = function() 
		{
			function getGlobal() {
				return this;
  			}
  			return getGlobal();
		};

} );;// <![CDATA[ 

/*~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
	Copyright (c) 2017 htmlmaptool for javascript
	AUTHOR: Ing. Armando Ibarra
	LICENCE: MIT License 
						Copyright (c) 2017 Ing. Armando Ibarra
	G+: profiles.google.com/armandoibarra1
	http://github.com/erpmtics
	VERSION: 0.0.1
	DATE: 24/10/2017 

	Tools and technologies: 
		Dev tools: https://github.com/petethepig/devtools-terminal
				   Sublime Text
				   Archlinux OS				   				  
~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

define( [
	"./core"
], function( htmlmaptool ) {

	//"use strict";

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

} );
// ]]>
;/* global Symbol */

//Calling define with a dependency array and a factory function
define( 'sesionstorage', [
	"./var/support",
], function( support ) {

	//"use strict";
	
	htmlmaptool.core.sessionstorage = htmlmaptool.core.sessionstorage || {};

	htmlmaptool.core.sessionstorage = ({
		config: function (options){
			console.log("test"); 
		},
		initialize: function()
		{

			// Break if no JSON support was found
			if(!JSON.parse || !JSON.stringify)
			{
				throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
			}

			if(typeof(Storage)!=="undefined"){

				//console.log("LocalStorage");
				localStorage = window.sessionStorage;
					    
			}else{
				console.log("LocalStorage No soportado o no habilitado");
			}
		},
		check: function()
		{
			if(typeof(Storage)!=="undefined"){
				return true;	    
			}else{
				 return false;
			}
		},
		save: function(id,object)
		{
			var object_x = JSON.stringify(object);
			localStorage.setItem(id,object_x);
		},
		get: function(id,object)
		{

			try{

				var datObj = JSON.parse(sessionStorage.getItem(id)) || null;
				if(datObj)
				{
					if (typeof dec === "string") {

						var dec = JSON.parse(dec);
					}else{

						return null;
					}

					return datObj;
				}else{
					console.warn("No databse on localStorage");
				}

			}catch(e){
				console.log(e);
				return false;
			}

		},
		delete: function(id,object)
		{
			sessionStorage.removeItem(id);
		},
		get_item_key: function(n)
		{
			// Retrieving an Item Key
			sessionStorage.key(n);
		},
		clear_all: function()
		{
			// Clearing the Datastore
			sessionStorage.clear();
		}
	});

	return function () {};

} );;define( function() {
	//"use strict";

	// All support tests are defined in their respective modules.
	return {};
} );