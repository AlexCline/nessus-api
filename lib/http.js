var request = require('request');

exports.methods = function(config){
  return {
    configure: function(){
      var opts = JSON.parse(JSON.stringify(config));
      opts.headers["X-ApiKeys"] = "accessKey=" + config.access_key + "; secretKey=" + config.secret_key;
      delete opts.access_key;
      delete opts.secret_key;
      return opts;
    },

    get: function(path, params, cb){
      var opts = this.configure();

      opts.method = 'GET';
      opts.url    = config.url + path;
      if(params.length > 0)
        opts.url += '?' + params.join("&");
      opts.json   = true;

      this.doRequest(opts, cb);
    },

    post: function(path, params, data, cb){
      var opts = this.configure();

      opts.method = 'POST';
      opts.url    = config.url + path;
      if(params.length > 0)
        opts.url += '?' + params.join("&");
      opts.json   = data;

      this.doRequest(opts, cb);
    },

    put: function(path, params, data, cb){
      var opts = this.configure();

      opts.method = "PUT";
      opts.url    = config.url + path;
      if(params.length > 0)
        opts.url += '?' + params.join("&");
      opts.json   = data;

      this.doRequest(opts, cb);
    },

    del: function(path, params, cb){
      var opts = this.configure();

      opts.method = 'DELETE';
      opts.url    = config.url + path;
      if(params.length > 0)
        opts.url += '?' + params.join("&");
      opts.json   = true;

      this.doRequest(opts, cb);
    },

    doRequest: function(opts, cb){
      request(opts, function(err, res, body){
        body = body || {};
        return cb(err || body.error, body);
      });
      
    },

  }
}