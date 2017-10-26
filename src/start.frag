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

( function( global, factory ) {
	//module pattern  encapsulated module, that cannot conflict with any other modules

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "The library requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {