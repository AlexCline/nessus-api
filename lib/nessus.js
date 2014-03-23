var fs = require('fs'),
    endpoints = fs.readdirSync([__dirname, "endpoints"].join("/"))

exports.getNessus = function(){

  var nessus = {};

  // Set some defaults options
  nessus.options = {
    strictSSL: true,
    rejectUnauthorized: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  nessus.config = function(options){
    if(options == undefined){
      return nessus.options;
    }

    var required_attrs = ['host', 'username', 'password'],
        optional_attrs = Object.keys(nessus.options);

    required_attrs.forEach(function(attr){
      if(options[attr]){
        nessus.options[attr] = options[attr];
      } else {
        throw new Error("A '" + attrs + "' option is required");
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