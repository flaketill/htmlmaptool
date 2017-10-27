/* jshint laxcomma: true */

define( [
	"core"
], function( htmlmaptool ) {

	//"use strict";
	// Map over htmlmaptool in case of overwrite
	var _htmlmaptool = window.htmlmaptool;

	console.log("3. Global");
		/*
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
		*/

	//}).call(this);//que tendrá this quse pasa antes que los demás argumentos.

} );