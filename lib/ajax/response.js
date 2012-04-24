define(['../../class',
        '../../events'],
function(clazz, events) {
  
  function Response(xhr) {
    events.EventEmitter.call(this);
    this._xhr = xhr;
    this._offset = 0;
  }
  clazz.inherits(Response, events.EventEmitter);
  
  Response.prototype._data = function() {
    console.log('offset: ', this._offset);
    if (this._xhr.responseText.length > this._offset) {
      this.emit('data', this._xhr.responseText.slice(this._offset))
      this._offset = this._xhr.responseText.length
    }
  }
  
  Response.prototype._end = function() {
    this.emit('end');
  };
  
  return Response;
});
