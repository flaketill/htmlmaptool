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

var core,exports_amd,htmlmaptool,exports_global,core_test;!function(o,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=o.document?t(o,!0):function(o){if(!o.document)throw new Error("The library requires a window with a document");return t(o)}:t(o)}("undefined"!=typeof window?window:this,function(o,t){return core=function(o){var o,t=this;t.htmlmaptool;return o="undefined"!=typeof exports?exports:t.htmlmaptool||{},o.version="0.0.1",o.name_app="htmlmaptool",o.VERBOSE=!1,console.log("1. Core"),o}(),exports_amd=function(o){o=function(){return o}(),console.log("2. AMD")}(core),exports_global=function(t){o.htmlmaptool;console.log("3. Global")}(),core_test=function(o){return console.log("4. Test"),console.log(o),o.test=function(){return console.log("[info2] - core/test --\x3e test function - update  - 2017-10-26"),this},o.test2=function(){return console.log("[info2] - core/test --\x3e test2 ++ function - update - 2017-10-26"),this},o}(core),htmlmaptool=function(o){return console.log(o),o}(core),htmlmaptool=function(){return htmlmaptool}()});