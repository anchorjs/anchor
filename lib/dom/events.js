define(function() {
  var mixin = {
    addEventListener: function(type, listener, useCapture) {
      return this.forEach(function(el) {
        el.addEventListener(type, listener, useCapture);
      });
    },
  
    removeEventListener: function(type, listener, useCapture) {
      return this.forEach(function(el) {
        el.removeEventListener(type, listener, useCapture);
      });
    }
  }
  
  mixin.on = mixin.addEventListener;
  mixin.addListener = mixin.addEventListener;
  mixin.off = mixin.removeEventListener;
  mixin.removeListener = mixin.removeEventListener;
  
  return mixin;
});
