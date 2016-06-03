var fs = require('fs'),
    endpoints = fs.readdirSync([__dirname, "endpoints"].join("/"))

exports.getNessus = function(){

  var nessus = {};

  // Set some defaults options
  nessus.options = {
    strictSSL: true,
    rejectUnauthorized: true,
    json: true,
    timeout: 15000,
    headers: {
      "User-Agent": "curl/7.37.1"
    }
  };

  nessus.config = function(options){
    if(options == undefined){
      return nessus.options;
    }

    var required_attrs = ['url', 'access_key', 'secret_key'],
        optional_attrs = Object.keys(nessus.options);

    required_attrs.forEach(function(attr){
      if(options[attr]){
        nessus.options[attr] = options[attr];
      } else {
        throw new Error("A '" + attr + "' option is required");
      }
    });

    optional_attrs.forEach(function(attr){
      if(options[attr] != undefined){
        delete nessus.options[attr];
        nessus.options[attr] = options[attr];
      }
    });

  }

  endpoints.forEach(function(file){
    if(/\.js$/.test(file)){
      var methods = require([__dirname, "endpoints", file].join("/")).methods(nessus.options);
      Object.keys(methods).forEach(function(method_name){
        nessus[method_name] = methods[method_name];
      });
    }
  });

  return nessus;
};