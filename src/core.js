/*global require*/
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
define([
	//"core",
	//"amd"
	//"test"
//], function( support, common ) {
], function( htmlmaptool ) {

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
		
		// Initial Setup
  		// -------------
		
		htmlmaptool.VERBOSE = false;

		console.log("1. Core");

		var core = htmlmaptool.core = {};

		return htmlmaptool;

	//}).call(this);

} );