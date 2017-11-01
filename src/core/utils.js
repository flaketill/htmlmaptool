/*global require*/
define( [
	"core",
	//"test"
], function( htmlmaptool ) {


	console.log("[info] - core/utils --> 6. utils");

	//console.log(htmlmaptool);

	//Nested namespaces

	var that = this,
		utils = that.utils2 = {};

	//var utils = that.utils = {};
	htmlmaptool.utils = that.utils || {};  

} );	