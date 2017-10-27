;(function() {
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
 * Date: 2017-03-20T18:59Z
 */
var core, htmlmaptool;
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
  return htmlmaptool;
  core = function (htmlmaptool) {
    //(function(windows){//module pattern  encapsulated module, that cannot conflict with any other modules
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
    htmlmaptool.VERBOSE = false;
    console.log('1. Core');
    return htmlmaptool;
  }(core);
  htmlmaptool = function (htmlmaptool) {
    (function () {
      //var htmlmaptool="jaja";
      console.log(htmlmaptool);
      return htmlmaptool;
    }.call(this));
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
}());