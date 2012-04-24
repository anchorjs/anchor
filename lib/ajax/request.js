define(['../../class',
        '../../events',
        './response'],
function(clazz, events, Response) {
  
  function Request(url, method) {
    events.EventEmitter.call(this);
    
    this.url = url;
    this.method = method || 'GET';
  }
  clazz.inherits(Request, events.EventEmitter);
  
  Request.prototype.send = function() {
    console.log('Request#send');
    
    if (!this._xhr) this._createXHR();
    this._xhr.send();
  }
  
  Request.prototype._createXHR = function() {
    var self = this
      , xhr = new XMLHttpRequest()
      , res
      , offset = 0;
    
    xhr.open(this.method, this.url, true);
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 0) {        // UNSENT
      } else if (xhr.readyState === 1) { // OPENED
        self.emit('open');
      } else if (xhr.readyState == 2) {  // HEADERS_RECEIVED
        res = new Response(xhr);
        self.emit('response', res);
      } else if (xhr.readyState == 3) {  // LOADING
        res._data();
      } else if (xhr.readyState === 4) { // DONE
        res._end();
        
        /*
        if (xhr.status === 200) {  
          //console.log(req.responseText);
          //console.log('done')
        } else {  
          //console.log("Error " + req.statusText);  
        }
        */ 
      }  
    };
    
    this._xhr = xhr;
  }
  
  return Request;
});
