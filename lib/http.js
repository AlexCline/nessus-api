var request = require('request'),
    xml2js = require('xml2js').parseString;

exports.methods = function(config){
  return {
    get: function(uri, params, cb){
      var opts = config;
      params.push("json=1");

      opts.method = 'GET';
      opts.url = config.host + uri + '?' + params.join('&');

      if(config.token){
        opts.headers.cookie = 'token=' + opts.token;
      }

      request(opts, function(err, response, body){
        if(err) return cb(err);

        var parsed = false;
        try {
          parsed = JSON.parse(body);
        } catch(e) {
          return cb(e, body);
        }

        if(parsed.reply.status != "OK"){
          return cb(parsed.reply.status, body);
        }

        return cb(err, parsed.reply.contents);
      });
    },
    post: function(uri, params, data, cb){
      var opts = config;
      params.push("json=1");

      opts.method = 'POST';
      opts.url = config.host + uri + '?' + params.join('&');
      opts.body = data;

      if(config.token){
        opts.headers.cookie = 'token=' + opts.token;
      }

      request(opts, function(err, response, body){
        if(err) return cb(err);

        var parsed = false;
        try {
          parsed = JSON.parse(body);
        } catch(e) {
          return cb(e, body);
        }

        if(parsed.reply.status != "OK"){
          return cb(parsed.reply.status, body);
        }

        return cb(err, parsed.reply.contents);
      });
    },

    // This method will submit a post and expect XML to be returned.
    xmlPost: function(uri, params, data, cb){
      var opts = config;

      opts.method = 'POST';
      opts.url = config.host + uri + '?' + params.join('&');
      opts.body = data;

      if(config.token){
        opts.headers.cookie = 'token=' + opts.token;
      }

      request(opts, function(err, response, body){
        if(err) return cb(err);

        xml2js(body, { explicitArray: false }, function(err, parsed){
          if(parsed.reply.status != "OK"){
            return cb(parsed.reply.status, body);
          }

          return cb(err, parsed.reply.contents);
        });
      });
    },
    put: function(uri, params, data, cb){
      return cb(new Error("HTTP method not implemented yet."));
    },
    del: function(uri, cb){
      return cb(new Error("HTTP method not implemented yet."));
    },
  }
}