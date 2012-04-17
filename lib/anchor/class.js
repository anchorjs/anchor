define({
  
  inherits: function(ctor, superCtor) {
    var SC = function() {};
    SC.prototype = superCtor.prototype;
    ctor.prototype = new SC();
    ctor.prototype.constructor = ctor;
  },
  
  augment: function(ctor, mixin) {
    for (method in mixin) {
      if (!ctor.prototype[method]) {
        ctor.prototype[method] = mixin[method];
      }
    }
  }
  
});
