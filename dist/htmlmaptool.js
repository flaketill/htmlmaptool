!function(){var t,o,e;t={},o=function(t,o){(function(t){var o,e=this;e.htmlmaptool;o="undefined"!=typeof exports?exports:e.htmlmaptool||{},o.version="0.0.1",o.name_app="htmlmaptool",o.VERBOSE=!1,o.prototype.map=function(t){for(var o=[],e=0;e<this.length;e++)o.push(t.call(this,this[e],e));return o},o.prototype.forEach=function(t){return this.map(t),this};var o={get:function(t){var e;return e="string"==typeof t?document.querySelectorAll(t):t.length?t:[t],new o(e)},create:function(t,e){var n=new o([document.createElement(t)]);if(e){e.className&&(n.addClass(e.className),delete e.className),e.text&&(n.text(e.text),delete e.text);for(var r in e)e.hasOwnProperty(r)&&n.attr(r,e[r])}return n}};return o.utils=o.utils||{},o.utils={data:null,config:function(t){var o={base_url:"/js/templates/"};if("object"==typeof t)var t=t||{};else t=o;this.data=t}},o.core.module.config("test"),o}).call(this)}(),function(t){t=function(){return t}()}(o),function(t){t.createHTMLDocument=function(){return"test"}()}(t),function(t){e.core.sessionstorage=e.core.sessionstorage||{},e.core.sessionstorage={config:function(t){console.log("test")},initialize:function(){if(!JSON.parse||!JSON.stringify)throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");"undefined"!=typeof Storage?localStorage=window.sessionStorage:console.log("LocalStorage No soportado o no habilitado")},check:function(){return"undefined"!=typeof Storage},save:function(t,o){var e=JSON.stringify(o);localStorage.setItem(t,e)},get:function(t,o){try{var e=JSON.parse(sessionStorage.getItem(t))||null;if(e){if("string"!=typeof n)return null;var n=JSON.parse(n);return e}console.warn("No databse on localStorage")}catch(t){return console.log(t),!1}},delete:function(t,o){sessionStorage.removeItem(t)},get_item_key:function(t){sessionStorage.key(t)},clear_all:function(){sessionStorage.clear()}}}(),function(t){var o=window.htmlmaptool;t.noConflict=function(e){return window.htmlmaptool===t&&(window._htmlmaptool=o),e&&window.htmlmaptool===t&&(window.htmlmaptool=o),t},t.getGlobal=function(){return function(){return this}()}}(o),e=function(t){return t}(o)}();