/*global require*/
define( 'utils', [
	"core",
	//"test"
], function( htmlmaptool ) {

	console.log("[info] - core/dropzone --> 7. Dropzone");

	htmlmaptool.dropzone = function() {
		console.warn("[info] - core/dropzone --> public method :: ");

		return this;
	};

    /**
     * Drag'n'drop - the first way to loading an image
     * 
     */	

	var dropZone = function() {
		//private vars
        var that = this;       

        //  can I call public method "public_method1" from this(private_method1) one and if yes HOW?
        function private_method1() {
            
            public.public_method1()
        }

        function getData(options) {

        	console.warn("[info] -  core/dropzone --> getData private ");

        	if (!options) {
        		console.warn("[info] -  core/dropzone --> getData private + "+ JSON.stringify(options));
        	}else{
        		console.warn("[info] -  core/dropzone --> getData private + "+ JSON.stringify(options));
        	}
        }

        var public = {
            public_method1: function() {
                console.warn("[info] -  core/dropzone --> Init dropzone "+ JSON.stringify(that.data_drag_data));	
            },
            setData: function(data_drag) {

                var options = that.data_drag_data=data_drag;
                console.warn("[info] -  core/dropzone --> Init dropzone "+ JSON.stringify(options));

                getData(options);
            },
            init: function() {
                private_method1()
            }
        };

        return public;
    } ();

    //Below we expose the object
	htmlmaptool.dropzone.drag_n_drop = function() {

		console.warn("[info] - core/dropzone --> public method :: Test");

		var drop = dropZone;

		return drop;
	};

	//Use with
    //dropZone.init();

    return htmlmaptool;

} );	