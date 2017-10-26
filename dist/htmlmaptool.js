
/*!
 * Htmlmaptool JavaScript Library v0.0.1
 * http://github.com/flaketill
 *
 *
 * Copyright (c) 2017 Armando Ibarra and other contributors
 *  This is a fork from https://github.com/summerstyle/summer
 *  edited by Armando Ibarra < armandoibarra1 dot com >
 *  Vera Lobacheva (http://iamvera.com)
 *
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-10-26T19:30Z
 */
var core, exports_amd, htmlmaptool, exports_global, core_test;
(function (global, factory) {
  //module pattern  encapsulated module, that cannot conflict with any other modules
  'use strict';
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error('The library requires a window with a document');
      }
      return factory(w);
    };
  } else {
    factory(global);
  }  // Pass this if window is not defined yet
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
  core = function (htmlmaptool) {
    //(function(windows){//module pattern  encapsulated module, that cannot conflict with any other modules
    //"use strict";
    //(function(windows){
    /**
     * htmlmaptool
     * ------------
     * Version : 0.0.1
     * Website : NULL
     * Repo    : github.com/flaketill/htmlmaptool
     * Author  : Armando Ibarra (@erpmtics)
     */
    //this --scope
    var that = this,
      //Save reference to instance.
      core_deletedIds = [], previusHtmlmaptool = that.htmlmaptool;
    //============================================================
    // Register Namespace
    //------------------------------------------------------------
    //
    /**
     * Top level namespace for Jasmine, a lightweight JavaScript BDD/spec/testing framework
     * 
     * @namespace
     */
    var htmlmaptool;
    //Nested namespaces
    if (typeof exports !== 'undefined') {
      htmlmaptool = exports;
    } else {
      //Top-level namespace being assigned an object literal
      //Singleton
      // creates a class and immediately instantiates an object --JavaScript is object-based 
      //rather than object-oriented. 
      htmlmaptool = that.htmlmaptool || {};  //Nested namespaces
    }
    /**
    	* Configuration
    	* -------------
      */
    htmlmaptool.version = '0.0.1';
    htmlmaptool.name_app = 'htmlmaptool';
    /**
     * Show diagnostic messages in the console if set to true
     *
     */
    // Initial Setup
    // -------------
    htmlmaptool.VERBOSE = false;
    console.log('1. Core');
    return htmlmaptool;  //}).call(this);
  }();
  exports_amd = function (htmlmaptool) {
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
    if (true) {
      htmlmaptool = function () {
        return htmlmaptool;
      }();
    }
    console.log('2. AMD');  // for CommonJS enviroments, export everything
                            /*if ( typeof exports !== "undefined" || typeof require !== "undefined" ) 
                            {
                            		extend(exports, htmlmaptool);
                            }*/
  }(core);
  exports_global = function (htmlmaptool) {
    //"use strict";
    // Map over htmlmaptool in case of overwrite
    var _htmlmaptool = window.htmlmaptool;
    console.log('3. Global');  /*
                               	htmlmaptool.noConflict = function( deep ) 
                               	{
                               		
                               		if ( window.htmlmaptool === htmlmaptool) {
                               			window._htmlmaptool = _htmlmaptool;
                               		}
                               
                               		if ( deep && window.htmlmaptool === htmlmaptool ) {
                               			window.htmlmaptool = _htmlmaptool;
                               		}
                               
                               		return htmlmaptool;
                               	};*/
                               /*
                               htmlmaptool.getGlobal = function() 
                               {
                               	function getGlobal() {
                               		return this;
                                		}
                                		return getGlobal();
                                	};*/
                               //}).call(this);//que tendrá this quse pasa antes que los demás argumentos.
  }();
  core_test = function (htmlmaptool) {
    console.log('4. Test');
    //console.log(core);
    console.log(htmlmaptool);
    //var htmlmaptool = core.htmlmaptool;
    //console.log(htmlmaptool.version);
    htmlmaptool.test = function () {
      console.log('[info] - core/test --> test function');  //return this;
    };
    //return this;
    return htmlmaptool;
  }(core);
  htmlmaptool = function (htmlmaptool) {
    //(function(windows, htmlmaptool){
    console.log(htmlmaptool);
    return htmlmaptool;  //}).call(this);
  }(core);
  htmlmaptool = function () {
    return htmlmaptool;
  }();
  //Use almond's special top-level, synchronous require to trigger factory
  //functions, get the final module value, and export it as the public
  //value.
  //return htmlmaptool;
  return htmlmaptool;  //}).call(this);
}));