/*global require*/
define( [	
	"core/utils",
	"core"
], function( utils, htmlmaptool  ) {	

	htmlmaptool.drag_n_drop = function(attributes, options)
	{

		var attrs = attributes || {};
		options || (options = {});
		//this.apply(this, arguments);
		console.log(attrs);
		console.log(options);
		console.warn("[info] - core/drag_n_drop --> 5. Drag and Drop function");

		var dropzone = attrs.dropzone;

		console.log(dropzone);


		console.warn("[info] - core/drag_n_drop --> Test utils functions");
		htmlmaptool.utils.check();
		htmlmaptool.utils.check('block',"n");
		htmlmaptool.utils.check('blocks',"n");

		var data = {};
		var utilsrsync = htmlmaptool.utils.check;

		htmlmaptool.utils.check = function(method, options) {
			options.data;
			utilsrsync(method, options);	
		};
		//htmlmaptool.utils();
		//htmlmaptool.utils.get();
		//htmlmaptool.utils.db();

		/* events fired on the drop targets */

		/*
		dropzone.addEventListener('dragover', function(e){
			//utils.stopEvent(e);
			// prevent default to allow drop
      		event.preventDefault();
		}, false);

		dropzone.addEventListener('dragleave', function(e){
			//utils.stopEvent(e);
			// prevent default to allow drop
      		event.preventDefault();			
		}, false);

		*/

		return this;
	};

	return htmlmaptool;

} );