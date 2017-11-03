/*global require*/
define( [	
	"core/utils",
	"core/dropzone",
	"core"
], function( utils, dropzone, htmlmaptool  ) {


	var utils = htmlmaptool.utils,
		core_dropzone = htmlmaptool.dropzone;

	// Default options, unless specified.
	var dataDragMap = {
		block: 'get_image_wrapper',
		close_button: '.close_button',
		loading_indicator: 'loading',
		button: 'button',
		filename: null,
		last_changed: null,
		dropzone: 'dropzone',
		dropzone_clear_button: '.clear_button',
		sm_img: 'sm_img'
	};

    /**
     * The constructor for get image to Drag an drop image (for get image form)
     * 
     * @constructor
     * @param {DOMElement} data_drag - Element object
     */	
    
    //var get_image = (function() {
    //var GetImage = (function(data_drag){
    function GetImage (data_drag) {

    	// the constructor was called without "new".
		if (!(this instanceof GetImage)) { return new GetImage(data_drag); }

    	// Default options, unless specified
    	var that = this,
    		//params = params  ? dataDragMap : {};
    		params = params || dataDragMap,
    		options = options || data_drag,
    		status = null; // || {};

    	console.warn("[info] - core/drag_n_drop --> GetImage :: Check data:: " + JSON.stringify(options));

    	// Ensure that we have the appropriate request data
		if (options !== null && options !=="undefined" && (typeof options == 'object' || options instanceof Object )) {

			console.warn("[info] - core/drag_n_drop --> GetImage :: pass ok data_drag ");

			// Ensure that we have a block like get_image_wrapper
			if (!options.block || options.block ==="undefined" ) { //|| options.block === null ) {

				console.warn("[info] - core/drag_n_drop --> GetImage :: error; Missing block id ");
				that.status = false;

			} else if (!options.close_button) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: close_button ");
				that.status = false;
			} else if (!options.loading_indicator) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: loading_indicator ");
				that.status = false;
			} else if (!options.button) {
				console.warn("[info] - core/drag_n_drop --> GetImage ::  button");
				that.status = false;
			} else if (!options.filename) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: filename ");
				that.status = true;
			} else if (!options.last_changed) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: last_changed  ");
				that.status = true;
			} else if (!options.dropzone) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: dropzone  ");
				that.status = false;
			} else if (!options.dropzone_clear_button) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: dropzone_clear_button ");
				that.status = false;	
			} else if (!options.sm_img) {
				console.warn("[info] - core/drag_n_drop --> GetImage ::  sm_img");
				that.status = false;																									
			}else{

				console.log("[info] - core/drag_n_drop --> GetImage :: params" +  JSON.stringify(params));
				that.status = true;
			}

			console.warn("[info] - core/drag_n_drop --> GetImage :: Check data::  switch " + JSON.stringify(options));	

			var block = utils.id(options.block),
				close_button = block.querySelector(options.close_button),
            	loading_indicator = utils.id(options.loading_indicator),
            	button = utils.id(options.button),
            	filename = null,
            	last_changed = null,
            	dropzone = utils.id(options.dropzone);

            	console.warn("[info] --------------------------------------------------- ");
            	console.log(dropzone);       	
            	console.warn("[info] --------------------------------------------------- ");

                var data_drag = {
                	dropzone : dropzone,
                	dropzone_clear_button : dropzone.querySelector(options.dropzone_clear_button),
                	sm_img : utils.id(options.sm_img)
                };

                var getImage = core_dropzone.drag_n_drop();
                	getImage.setData(data_drag);
                	getImage.init();

		}else{

			if (!options) {
				console.warn("[info] - core/drag_n_drop --> GetImage :: error; Missing data ");
				that.status = false;
			}
			
		}

		function getStatus () {
			//return this.status;
			console.log("[info] - core/drag_n_drop --> getStatus :: ");
			return that.status;
		}

		//Public method to getStatus
		this.getStatus = function()
		{
			console.log("[info] - core/drag_n_drop --> getStatus :: From Public method ");
			return getStatus();
		}
    };
    //})();

	//htmlmaptool.drag_n_drop = function(attributes, options)
	htmlmaptool.drag_n_drop = function(options)
	{

		//var options = options || {};
		var image = new GetImage(options);
		var status = image.getStatus();

		console.log(status);
		//this.apply(this, arguments);
		//console.log(attrs);
		//console.log(options);
		//console.warn("[info] - core/drag_n_drop --> 5. Drag and Drop function");
		/*
		var dropzone = attrs.dropzone;

		console.log(dropzone);


		//console.warn("[info] - core/drag_n_drop --> Test utils functions");
		htmlmaptool.utils.check();
		htmlmaptool.utils.check('block',"n");
		htmlmaptool.utils.check('blocks',"n");

		var data = {};
		var utilsrsync = htmlmaptool.utils.check;

		htmlmaptool.utils.check = function(method, options) {
			options.data;
			utilsrsync(method, options);	
		};
		*/
		
		//var get_image = (function(data_drag) { var block = utils.id('get_image_wrapper'); })();
		//htmlmaptool.js Uncaught TypeError: get_image is not a constructor
		//var image = new get_image(data_drag);
		//htmlmaptool.js Uncaught TypeError: get_image is not a function
		//get_image(data_drag);

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
		
		return status;
		//return this;
	};

	return htmlmaptool;

} );