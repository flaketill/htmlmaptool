/*global require*/
define( 'utils', [
	"core",
	//"test"
], function( htmlmaptool ) {
	
	/*
	 * Using AMD/RequireJS
	 * The `utils` module 
	 */

	console.log("[info] - core/utils --> 6. utils");

	//console.log(htmlmaptool);

	//Nested namespaces

	var that = this,
		core_test,
		utils = htmlmaptool.core.utils = {},
		utils = htmlmaptool.utils = {};

	// An optional error callback with a fallback error 
	var wrapError = function(options) {
		var error = options.error;
		options.error = function(resp) {
			throw new Error('A "wrap" property or function must be specified');
		};
	};

	// Throw an error when a URL is needed, and none is supplied.
	var urlError = function() {
		throw new Error('A "url" property or function must be specified');
	};

	/*
	urlError();

	// Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }
    */

    /* Utilities */
  
	htmlmaptool.utils = function() {
		console.warn("[info] - core/utils --> public method :: Utils testing");

		//return JSON.parse( data );

		//console.log(that);

		return this;
	};

	// Map from utils implementation
	var methodMap = {
		'block': 'get_image_wrapper',
	    'close_button': 'PUT'
	};

	htmlmaptool.utils.check = function(method, options) {

		//var data = {};
		var options = {};
		var data = null;
		var type = methodMap[method];

		// Default JSON-request options.
    	//var params = {type: type, data: null};
    	var params = {type: type};

    	console.warn("[info] - core/utils --> public method :: htmlmaptool.utils.check --> init");
		
		// Ensure that we have the appropriate request data.
		if (options.data == null && (method === 'block' || method === 'close_button')) {

			console.warn("[info] - core/utils --> public method :: htmlmaptool.utils.check: pass ok ");
			//params.data = JSON.stringify(options.attrs);

			//|| params.toJSON(options));
		}
		return this;
	};
	

	/*var utilsrsync = htmlmaptool.utils.check;

	htmlmaptool.utils.check = function(method, options) {
		options.data;
		utilsrsync(method, options);

	};
	*/

	htmlmaptool.utils.db = function() {

		console.warn("[info] - core/utils --> public method :: db");
		return this;
	};

	htmlmaptool.utils.prototype.get = "s";
	
	htmlmaptool.utils.prototype = {
		get: function( ) {
			return arguments.length;
		}
	};

	function data() {
		this.datas = "yeah";
		//console.log(JSON.parse( this.datas ));

		//return JSON.parse( this.datas );
		
		//this.initialize.apply(this, arguments);
	}

	data.prototype.test = {
		cache: function( owner ) {
			return arguments.length;
		}

	};

	data.prototype.test_data = "English";

	data.prototype.name = function() {
		return this.datas;
	};

	var dataPriv = new data();

	console.warn("[info] - core/utils --> public method :: new Class"+ dataPriv);

	var add = (function () {
		var counter = 0;
		return function () {return counter += 1;}
	})();

	add();

	(function () {
	var x = "Hello!!";      // I will invoke myself

	console.log('[info] - core/utils --> I will invoke myself')
	})();

	htmlmaptool.view = view || {};

	var view = htmlmaptool.view = function(attributes, options) {
		var attrs = attributes || {};
        options || (options = {});

        console.warn("[info] - core/utils --> public method :: Utils view");
		//this.initialize.apply(this, arguments);
		//this.apply(this, arguments);
	};

	htmlmaptool.view.test = htmlmaptool.view.test || {
		init:function(){
			console.log("Obteniendo nit default + fun model");
			return this;
		}
	};

	//var htmlmaptool.utils2 = htmlmaptool.utils2 || {};
	
	htmlmaptool.utils2 = htmlmaptool.utils2 || {};

	htmlmaptool.utils2 = ({
		data: null,
		initialize: function()
		{
			// Break if no JSON support was found
			if(!JSON.parse || !JSON.stringify)
			{
				throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
			}

			if(typeof(Storage)!=="undefined"){

				//console.log("LocalStorage");
				localStorage = window.sessionStorage;
					    
			}else{
				console.log("[ERROR] - LocalStorage - No support or browse with localstorage disabled");
			}

			console.log("[ERROR] - LocalStorage - No support or browse with localstorage disabled");
		},
		config: function function_name (options)
		{
			//Default options if the user not set
			var defaultOptions = 
			{
				base_url: '/js/templates/',
				foo: 'x',
				bar:'Unknow'	
			};

			if (typeof options == 'object') {

				var options = options || {};
			} else {
				options = defaultOptions;
			}

			this.data = options;
			console.log(options.base_url + " ---" + options.foo + ' and ' + options.bar);
		},
		insert_sd :  function(type,data) {
				console.log("set method");
		},
		get :  function() {

			var data = this.data || null;
			//var data = JSON.parse(this.data) || null;

			/*data = JSON.parse(data);

			if(datObj)
			{
				if (typeof dec === "string") {
					var dec = JSON.parse(dec);
				}else{
					return null;
				}

				return datObj;
			}else{
				console.warn("No databse on localStorage");
			}
			*/

				console.log("get method"+ data );
		}
		//this.initialize.apply(this, arguments);
	});
	
	/*
	utils.on = function(name, callback, context) {
		console.warn("[info] - core/utils --> utils testing callback");
		return this;
    };

    core_test = function (htmlmaptool) {
    	htmlmaptool.test = function () {
    		console.log('[info2] - core/test --> test function - update  - 2017-10-26');
    		return this;
    };
    }(core);

    htmlmaptool = function () {
        return htmlmaptool;
    }();*/

    
    //var

    htmlmaptool.core.utils = htmlmaptool.prototype = {
    	test: that,
    	//A get method
    	get: function() {

    		console.log('[info2] - core/utils --> htmlmaptool.testget.get()   - 2017-10-31');

    		return this;
    	},
    	set: function( num ) {

    		console.log('[info2] - core/utils --> htmlmaptool.testget.set('+ num + '")   - 2017-10-31');
    		return this;
    	},
    	/**
    		* Returns offset from html page top-left corner for some element
        *
        * @param node {HTMLElement} - html element
        * @returns {Object} - object with offsets, e.g. {x: 100, y: 200}
        */
      getOffset : function(node) {
            var boxCoords = node.getBoundingClientRect();
        
            return {
                x : Math.round(boxCoords.left + window.pageXOffset),
                y : Math.round(boxCoords.top + window.pageYOffset)
            };
      },        
        /**
         * Returns correct coordinates (incl. offsets)
         *
         * @param x {number} - x-coordinate
         * @param y {number} - y-coordinate
         * @returns {Object} - object with recalculated coordinates, e.g. {x: 100, y: 200}
         */ 
        /*getRightCoords : function(x, y) {
            return {
                x : x - app.getOffset('x'),
                y : y - app.getOffset('y')
            };
        },*/
        
        /**
         * TODO: will use same method of app.js
         * @deprecated
         */
        id : function (str) {
            return document.getElementById(str);
        }
    };

    return htmlmaptool;

} );	