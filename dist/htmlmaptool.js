/*!
 * Htmlmaptool JavaScript Library v0.0.1
 * http://github.com/flaketill
 *
 * Copyright (c) 2017 Armando Ibarra and other contributors
 * This is a fork from the Summer Project hosted on: https://github.com/summerstyle/summer
 * edited by Armando Ibarra < armandoibarra1 dot com >
 * Vera Lobacheva (http://iamvera.com)
 *
 * The main changes I have added are:
 * Support for AMD to use with requirejs
 * 
 * Released under the MIT license
 * https://github.com/flaketill/htmlmaptool/blob/master/LICENSE
 *
 * Date: 2017-10-26T01:40Z
 */
var core, exports_amd, htmlmaptool, exports_global, core_test, utils, core_utils, core_dropzone, core_drag_n_drop;
(function (global, factory) {
  //module pattern  encapsulated module, that cannot conflict with any other modules
  'use strict';
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error('The library requires a window with a document');
      }
      return factory(w);
    };
  } else {
    factory(global);
  }  // Pass this if window is not defined yet
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
  core = function (htmlmaptool) {
    //(function(windows){//module pattern  encapsulated module, that cannot conflict with any other modules
    //"use strict";
    //(function(windows){
    /**
     * htmlmaptool
     * ------------
     * Version : 0.0.1
     * Website : NULL
     * Repo    : github.com/flaketill/htmlmaptool
     * Author  : Armando Ibarra (@erpmtics)
     */
    //this --scope
    var that = this,
      //Save reference to instance.
      core_deletedIds = [], previusHtmlmaptool = that.htmlmaptool;
    //============================================================
    // Register Namespace
    //------------------------------------------------------------
    //
    /**
     * Top level namespace for Jasmine, a lightweight JavaScript BDD/spec/testing framework
     * 
     * @namespace
     */
    var htmlmaptool;
    //Nested namespaces
    if (typeof exports !== 'undefined') {
      htmlmaptool = exports;
    } else {
      //Top-level namespace being assigned an object literal
      //Singleton
      // creates a class and immediately instantiates an object --JavaScript is object-based 
      //rather than object-oriented. 
      htmlmaptool = that.htmlmaptool || {};  //Nested namespaces
    }
    /**
    	* Configuration
    	* -------------
      */
    htmlmaptool.version = '0.0.1';
    htmlmaptool.name_app = 'htmlmaptool';
    /**
     * Show diagnostic messages in the console if set to true
     *
     */
    // Initial Setup
    // -------------
    htmlmaptool.VERBOSE = false;
    console.log('1. Core');
    var core = htmlmaptool.core = {};
    return htmlmaptool;  //}).call(this);
  }();
  exports_amd = function (htmlmaptool) {
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
    if (true) {
      htmlmaptool = function () {
        return htmlmaptool;
      }();
    }
    console.log('2. AMD');  // for CommonJS enviroments, export everything
                            /*if ( typeof exports !== "undefined" || typeof require !== "undefined" ) 
                            {
                            		extend(exports, htmlmaptool);
                            }*/
  }(core);
  exports_global = function (htmlmaptool) {
    //"use strict";
    // Map over htmlmaptool in case of overwrite
    var _htmlmaptool = window.htmlmaptool;
    console.log('3. Global');  /*
                               	htmlmaptool.noConflict = function( deep ) 
                               	{
                               		
                               		if ( window.htmlmaptool === htmlmaptool) {
                               			window._htmlmaptool = _htmlmaptool;
                               		}
                               
                               		if ( deep && window.htmlmaptool === htmlmaptool ) {
                               			window.htmlmaptool = _htmlmaptool;
                               		}
                               
                               		return htmlmaptool;
                               	};*/
                               /*
                               htmlmaptool.getGlobal = function() 
                               {
                               	function getGlobal() {
                               		return this;
                                		}
                                		return getGlobal();
                                	};*/
                               //}).call(this);//que tendrá this quse pasa antes que los demás argumentos.
  }(core);
  core_test = function (htmlmaptool) {
    console.log('4. Test');
    //console.log(core);
    //console.log(htmlmaptool);
    //var htmlmaptool = core.htmlmaptool;
    //console.log(htmlmaptool.version);
    htmlmaptool.test = function () {
      console.log('[info2] - core/test --> test function - update  - 2017-10-26');
      return this;
    };
    htmlmaptool.test2 = function () {
      console.log('[info2] - core/test --> test2 ++ function - update - 2017-10-26');
      return this;
    };
    /*
    	var htmlmaptool = htmlmaptool;
    
    	htmlmaptool.prototype.test2 = function () {
    		
    		console.log("[info2] - core/test --> test2 + function ");
    		return this;
    	};*/
    return htmlmaptool;
  }(core);
  utils = function (htmlmaptool) {
    /*
    * Using AMD/RequireJS
    * The `utils` module 
    */
    console.log('[info2] - core/utils --> 6. utils');
    //console.log(htmlmaptool);
    //Nested namespaces
    var that = this, core_test, utils = htmlmaptool.core.utils = {}, utils = htmlmaptool.utils = {};
    // An optional error callback with a fallback error 
    var wrapError = function (options) {
      var error = options.error;
      options.error = function (resp) {
        throw new Error('A "wrap" property or function must be specified');
      };
    };
    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function () {
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
    htmlmaptool.core.utils = htmlmaptool.prototype = {
      test: that,
      //A get method
      get: function () {
        console.log('[info22] - core/utils --> htmlmaptool.testget.get()   - 2017-10-31');
        return this;
      },
      set: function (num) {
        console.log('[info22] - core/utils --> htmlmaptool.testget.set(' + num + '")   - 2017-10-31');
        return this;
      },
      /**
      * Returns offset from html page top-left corner for some element
        *
        * @param node {HTMLElement} - html element
        * @returns {Object} - object with offsets, e.g. {x: 100, y: 200}
        */
      getOffset: function (node) {
        var boxCoords = node.getBoundingClientRect();
        return {
          x: Math.round(boxCoords.left + window.pageXOffset),
          y: Math.round(boxCoords.top + window.pageYOffset)
        };
      },
      /**
       * Returns correct coordinates (incl. offsets)
       *
       * @param x {number} - x-coordinate
       * @param y {number} - y-coordinate
       * @returns {Object} - object with recalculated coordinates, e.g. {x: 100, y: 200}
       */
      getRightCoords: function (x, y) {
        return {
          x: x - app.getOffset('x'),
          y: y - app.getOffset('y')
        };
      },
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      id: function (str) {
        return document.getElementById(str);
      },
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      hide: function (node) {
        node.style.display = 'none';
        return this;
      },
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      show: function (node) {
        node.style.display = 'block';
        return this;
      },
      /**
       * Escape < and > (for code output)
       *
       * @param str {string} - a string with < and >
       * @returns {string} - a string with escaped < and >
       */
      encode: function (str) {
        return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      },
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      foreach: function (arr, func) {
        for (var i = 0, count = arr.length; i < count; i++) {
          func(arr[i], i);
        }
      },
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      foreachReverse: function (arr, func) {
        for (var i = arr.length - 1; i >= 0; i--) {
          func(arr[i], i);
        }
      },
      /**
       * Display debug info2 to some block
       */
      debug: function () {
        var output = document.getElementById('debug');
        return function () {
          output.innerHTML = [].join.call(arguments, ' ');
        };
      }(),
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      stopEvent: function (e) {
        e.stopPropagation();
        e.preventDefault();
        return this;
      },
      /**
       * TODO: will use same method of app.js
       * @deprecated
       */
      extend: function (obj, options) {
        var target = {};
        for (var name in obj) {
          if (obj.hasOwnProperty(name)) {
            target[name] = options[name] ? options[name] : obj[name];
          }
        }
        return target;
      },
      inherits: function () {
        var F = function () {
        };
        return function (Child, Parent) {
          F.prototype = Parent.prototype;
          Child.prototype = new F();
          Child.prototype.constructor = Child;
        };
      }()
    };
    htmlmaptool.utils = function () {
      console.warn('[info2] - core/utils --> public method :: Utils testing');
      //return JSON.parse( data );
      //console.log(that);
      return this;
    };
    htmlmaptool.utils.set = function (method, options) {
      return this;
    };
    htmlmaptool.utils.get = function (method, options) {
      return this;
    };
    //Below we expose the math object as utilities to our html tags, as well as the client-side
    htmlmaptool.utils.id = function (id) {
      return htmlmaptool.core.utils.id(id);
    };
    // Map from utils implementation
    var methodMap = {
      'block': 'get_image_wrapper',
      'close_button': 'PUT'
    };
    htmlmaptool.utils.check = function (method, options) {
      //var data = {};
      var options = {};
      var data = null;
      var type = methodMap[method];
      // Default JSON-request options.
      //var params = {type: type, data: null};
      var params = { type: type };
      console.warn('[info2] - core/utils --> public method :: htmlmaptool.utils.check --> init');
      // Ensure that we have the appropriate request data.
      if (options.data == null && (method === 'block' || method === 'close_button')) {
        console.warn('[info2] - core/utils --> public method :: htmlmaptool.utils.check: pass ok ');  //params.data = JSON.stringify(options.attrs);
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
    htmlmaptool.utils.db = function () {
      console.warn('[info2] - core/utils --> public method :: db');
      return this;
    };
    htmlmaptool.utils.prototype.get = 's';
    htmlmaptool.utils.prototype = {
      get: function () {
        return arguments.length;
      }
    };
    function data() {
      this.datas = 'yeah';  //console.log(JSON.parse( this.datas ));
                            //return JSON.parse( this.datas );
                            //this.initialize.apply(this, arguments);
    }
    data.prototype.test = {
      cache: function (owner) {
        return arguments.length;
      }
    };
    data.prototype.test_data = 'English';
    data.prototype.name = function () {
      return this.datas;
    };
    var dataPriv = new data();
    console.warn('[info2] - core/utils --> public method :: new Class' + dataPriv);
    var add = function () {
      var counter = 0;
      return function () {
        return counter += 1;
      };
    }();
    add();
    (function () {
      var x = 'Hello!!';
      // I will invoke myself
      console.log('[info2] - core/utils --> I will invoke myself');
    }());
    htmlmaptool.view = view || {};
    var view = htmlmaptool.view = function (attributes, options) {
      var attrs = attributes || {};
      options || (options = {});
      console.warn('[info2] - core/utils --> public method :: Utils view');  //this.initialize.apply(this, arguments);
                                                                             //this.apply(this, arguments);
    };
    htmlmaptool.view.test = htmlmaptool.view.test || {
      init: function () {
        console.log('Obteniendo nit default + fun model');
        return this;
      }
    };
    //var htmlmaptool.utils2 = htmlmaptool.utils2 || {};
    htmlmaptool.utils2 = htmlmaptool.utils2 || {};
    htmlmaptool.utils2 = {
      data: null,
      initialize: function () {
        // Break if no JSON support was found
        if (!JSON.parse || !JSON.stringify) {
          throw new Error('No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page');
        }
        if (typeof Storage !== 'undefined') {
          //console.log("LocalStorage");
          localStorage = window.sessionStorage;
        } else {
          console.log('[ERROR] - LocalStorage - No support or browse with localstorage disabled');
        }
        console.log('[ERROR] - LocalStorage - No support or browse with localstorage disabled');
      },
      config: function function_name(options) {
        //Default options if the user not set
        var defaultOptions = {
          base_url: '/js/templates/',
          foo: 'x',
          bar: 'Unknow'
        };
        if (typeof options == 'object') {
          var options = options || {};
        } else {
          options = defaultOptions;
        }
        this.data = options;
        console.log(options.base_url + ' ---' + options.foo + ' and ' + options.bar);
      },
      insert_sd: function (type, data) {
        console.log('set method');
      },
      get: function () {
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
        console.log('get method' + data);
      }  //this.initialize.apply(this, arguments);
    };
    /*
    	utils.on = function(name, callback, context) {
    		console.warn("[info2] - core/utils --> utils testing callback");
    		return this;
        };
    
        core_test = function (htmlmaptool) {
        	htmlmaptool.test = function () {
        		console.log('[info22] - core/test --> test function - update  - 2017-10-26');
        		return this;
        };
        }(core);
    
        htmlmaptool = function () {
            return htmlmaptool;
        }();*/
    return htmlmaptool;
  }(core);
  core_utils = undefined;
  utils = function (htmlmaptool) {
    console.log('[info2] - core/dropzone --> 7. Dropzone');
    htmlmaptool.dropzone = function () {
      console.warn('[info2] - core/dropzone --> public method :: ');
      return this;
    };
    /**
     * Drag'n'drop - the first way to loading an image
     * 
     */
    var dropZone = function () {
      //private vars
      var that = this;
      //  can I call public method "public_method1" from this(private_method1) one and if yes HOW?
      function private_method1() {
        public.public_method1();
      }
      function getData(options) {
        console.warn('[info2] -  core/dropzone --> getData private ');
        if (!options) {
          console.warn('[info2] -  core/dropzone --> getData private + ' + JSON.stringify(options));
        } else {
          console.warn('[info2] -  core/dropzone --> getData private + ' + JSON.stringify(options));
        }
      }
      var public = {
        public_method1: function () {
          console.warn('[info2] -  core/dropzone --> Init dropzone ' + JSON.stringify(that.data_drag_data));
        },
        setData: function (data_drag) {
          var options = that.data_drag_data = data_drag;
          console.warn('[info2] -  core/dropzone --> Init dropzone ' + JSON.stringify(options));
          getData(options);
        },
        init: function () {
          private_method1();
        }
      };
      return public;
    }();
    //Below we expose the object
    htmlmaptool.dropzone.drag_n_drop = function () {
      console.warn('[info2] - core/dropzone --> public method :: Test');
      var drop = dropZone;
      return drop;
    };
    //Use with
    //dropZone.init();
    return htmlmaptool;
  }(core);
  core_dropzone = undefined;
  core_drag_n_drop = function (utils, dropzone, htmlmaptool) {
    var utils = htmlmaptool.utils, core_dropzone = htmlmaptool.dropzone;
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
    function GetImage(data_drag) {
      // the constructor was called without "new".
      if (!(this instanceof GetImage)) {
        return new GetImage(data_drag);
      }
      // Default options, unless specified
      var that = this,
        //params = params  ? dataDragMap : {};
        params = params || dataDragMap, options = options || data_drag, status = null;
      // || {};
      console.warn('[info2] - core/drag_n_drop --> GetImage :: Check data:: ' + JSON.stringify(options));
      // Ensure that we have the appropriate request data
      if (options !== null && options !== 'undefined' && (typeof options == 'object' || options instanceof Object)) {
        console.warn('[info2] - core/drag_n_drop --> GetImage :: pass ok data_drag ');
        // Ensure that we have a block like get_image_wrapper
        if (!options.block || options.block === 'undefined') {
          //|| options.block === null ) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: error; Missing block id ');
          that.status = false;
        } else if (!options.close_button) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: close_button ');
          that.status = false;
        } else if (!options.loading_indicator) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: loading_indicator ');
          that.status = false;
        } else if (!options.button) {
          console.warn('[info2] - core/drag_n_drop --> GetImage ::  button');
          that.status = false;
        } else if (!options.filename) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: filename ');
          that.status = true;
        } else if (!options.last_changed) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: last_changed  ');
          that.status = true;
        } else if (!options.dropzone) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: dropzone  ');
          that.status = false;
        } else if (!options.dropzone_clear_button) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: dropzone_clear_button ');
          that.status = false;
        } else if (!options.sm_img) {
          console.warn('[info2] - core/drag_n_drop --> GetImage ::  sm_img');
          that.status = false;
        } else {
          console.log('[info2] - core/drag_n_drop --> GetImage :: params' + JSON.stringify(params));
          that.status = true;
        }
        console.warn('[info2] - core/drag_n_drop --> GetImage :: Check data::  switch ' + JSON.stringify(options));
        var block = utils.id(options.block), close_button = block.querySelector(options.close_button), loading_indicator = utils.id(options.loading_indicator), button = utils.id(options.button), filename = null, last_changed = null, dropzone = utils.id(options.dropzone);
        console.warn('[info2] --------------------------------------------------- ');
        console.log(dropzone);
        console.warn('[info2] --------------------------------------------------- ');
        var data_drag = {
          dropzone: dropzone,
          dropzone_clear_button: dropzone.querySelector(options.dropzone_clear_button),
          sm_img: utils.id(options.sm_img)
        };
        var getImage = core_dropzone.drag_n_drop();
        getImage.setData(data_drag);
        getImage.init();
      } else {
        if (!options) {
          console.warn('[info2] - core/drag_n_drop --> GetImage :: error; Missing data ');
          that.status = false;
        }
      }
      function getStatus() {
        //return this.status;
        console.log('[info2] - core/drag_n_drop --> getStatus :: ');
        return that.status;
      }
      //Public method to getStatus
      this.getStatus = function () {
        console.log('[info2] - core/drag_n_drop --> getStatus :: From Public method ');
        return getStatus();
      };
    }
    //})();
    //htmlmaptool.drag_n_drop = function(attributes, options)
    htmlmaptool.drag_n_drop = function (options) {
      //var options = options || {};
      var image = new GetImage(options);
      var status = image.getStatus();
      console.log(status);
      //this.apply(this, arguments);
      //console.log(attrs);
      //console.log(options);
      //console.warn("[info2] - core/drag_n_drop --> 5. Drag and Drop function");
      /*
      		var dropzone = attrs.dropzone;
      
      		console.log(dropzone);
      
      
      		//console.warn("[info2] - core/drag_n_drop --> Test utils functions");
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
      return status;  //return this;
    };
    return htmlmaptool;
  }(core_utils, core_dropzone, core);
  htmlmaptool = function (htmlmaptool) {
    //(function(windows, htmlmaptool){
    //console.log(htmlmaptool);
    return htmlmaptool;  //}).call(this);
  }(core);
  htmlmaptool = function () {
    return htmlmaptool;
  }();
  //Use almond's special top-level, synchronous require to trigger factory
  //functions, get the final module value, and export it as the public
  //value.
  return htmlmaptool;
}));