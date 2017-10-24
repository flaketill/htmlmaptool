/* global Symbol */

//Calling define with a dependency array and a factory function
define( 'sesionstorage', [
	"./var/support",
], function( support ) {

	//"use strict";
	
	htmlmaptool.core.sessionstorage = htmlmaptool.core.sessionstorage || {};

	htmlmaptool.core.sessionstorage = ({
		config: function (options){
			console.log("test"); 
		}
		,initialize: function()
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
				console.log("LocalStorage No soportado o no habilitado");
			}
		}
		,check: function()
		{
			if(typeof(Storage)!=="undefined"){
				return true;	    
			}else{
				 return false;
			}
		}
		,save: function(id,object)
		{
			var object_x = JSON.stringify(object);
			localStorage.setItem(id,object_x);
		}
		,get: function(id,object)
		{

			try{

				var datObj = JSON.parse(sessionStorage.getItem(id)) || null;
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

			}catch(e){
				console.log(e);
				return false;
			}

		}
		,delete: function(id,object)
		{
			sessionStorage.removeItem(id);
		}
		,get_item_key: function(n)
		{
			// Retrieving an Item Key
			sessionStorage.key(n);
		}
		,clear_all: function()
		{
			// Clearing the Datastore
			sessionStorage.clear();
		}
	});

	return function () {};

} );