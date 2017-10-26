 	//The modules for your project will be inlined above
    //this snippet. Ask almond to synchronously require the
    //module value for 'main' here and return it as the
    //value to use for the public API for the built file.

    //Register in the values from the outer closure for common dependencies
    //as local almond modules

    //Don't use ------+
    //}).call(this);
    
    define('htmlmaptool', function () {
        return htmlmaptool;
    });

    //Use almond's special top-level, synchronous require to trigger factory
    //functions, get the final module value, and export it as the public
    //value.
    return require('htmlmaptool');
});