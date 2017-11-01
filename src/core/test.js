/*global require*/
define( [
	"core",
	//"test"
], function( htmlmaptool ) {

	console.log("4. Test");

	//console.log(core);
	//console.log(htmlmaptool);

	//var htmlmaptool = core.htmlmaptool;

	//console.log(htmlmaptool.version);
	
	htmlmaptool.test = function() {

		console.log("[info] - core/test --> test function - update  - 2017-10-26");
		return this;
	};

	htmlmaptool.test2 = function() {

		console.log("[info] - core/test --> test2 ++ function - update - 2017-10-26");
		return this;
	};
	
	/*
	var htmlmaptool = htmlmaptool;

	htmlmaptool.prototype.test2 = function () {
		
		console.log("[info] - core/test --> test2 + function ");
		return this;
	};*/

	return htmlmaptool;

} );	