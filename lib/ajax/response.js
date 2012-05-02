define(['../../class',
        '../../events'],
function(clazz, events) {
  
  function Response(xhr) {
    events.EventEmitter.call(this);
    this._offset = 0;
  }
  clazz.inherits(Response, events.EventEmitter);
  
  Response.prototype._data = function(xhr) {
    if (xhr.responseText.length > this._offset) {
      this.emit('data', xhr.responseText.slice(this._offset));
      this._offset = xhr.responseText.length;
    }
  }
  
  Response.prototype._end = function(xhr) {
    this.responseText = xhr.responseText;
    this.responseXML = xhr.responseXML;
    this.emit('end');
  };
  
  return Response;
});
