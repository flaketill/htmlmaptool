define( [
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

} );