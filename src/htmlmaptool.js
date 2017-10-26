// <![CDATA[ 

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
