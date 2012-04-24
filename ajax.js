define(['./lib/ajax/request'],
function(Request) {

  function get(url, method) {
    console.log('Ajax#get')
    
    var req = new Request(url, method);
    req.send();
    return req;
  }

  
  var exports = {};
  exports.get = get;
  
  return exports;
});
