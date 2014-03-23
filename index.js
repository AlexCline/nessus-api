var Nessus = require('./lib/nessus'),
    pkg = require('./package');

exports = module.exports = function(){
  var nessus = Nessus.getNessus();
  nessus.version = pkg.version;
  return nessus;
}