/*global require*/
define( [
	"core",
	//"test"
], function( htmlmaptool ) {


	console.log("4. Test");

	//console.log(core);
	console.log(htmlmaptool);

	//var htmlmaptool = core.htmlmaptool;

	//console.log(htmlmaptool.version);

	
	htmlmaptool.test = function() {

		console.log("[info] - core/test --> test function");
		//return this;
	};

	//return this;
	return htmlmaptool;

} );	