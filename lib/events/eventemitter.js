define(function() {
  
  function EventEmitter() {
    this._events = {};
    this._maxListeners = 10;
  }
  
  EventEmitter.prototype.emit = function() {
    var type = arguments[0];
    
    console.log('EMIT!: ' + type);
  }
  
  EventEmitter.prototype.on =
  EventEmitter.prototype.addListener = function(type, listener) {
    // TODO: emit newListener
    (this._events[type] = this._events[type] || []).push(listener);
    // TODO: output warning if maxListeners exceeded
    
    return this;
  }
  
  EventEmitter.prototype.off = 
  EventEmitter.prototype.removeListener = function(type, listener) {
    if (!this._events[type]) { return this; }
    
    var list = this._events[type];
    var pos = -1;
    for (var i = 0, len = list.length; i < len; i++) {
      if (list[i] === listener) {
        pos = i;
        break;
      }
    }
    
    if (pos < 0) { return this; }
    
    list.splice(pos, 1);
    if (list.length == 0) {
      delete this._events[type];
    }
    
    return this;
  }
  
  EventEmitter.prototype.setMaxListeners = function(n) {
    this._maxListeners = n;
  }
  
  return EventEmitter;
});
