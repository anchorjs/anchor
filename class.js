/**
 * Module definition.
 */
define({
  
  /**
   * Inherit the prototype methods from one constructor into another.
   *
   * As an additional convenience, `superCtor` will be accessible through the
   * `ctor.super_` property.
   *
   * Heritage:
   *
   *   This function is principly designed based on the information in Pro
   *   JavaScript Design Patterns, Chapter 3: Inheritance.  The function is
   *   named `extend` in the book.
   *
   *   The behavior of this function is equivalent to that of `inherits()`
   *   provided by Node's `util` module.
   *
   * @param {Function} ctor Contructor function that inherits prototype.
   * @param {Function} superCtor Constructor function to inherit prototype from.
   */
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    var F = function() {};
    F.prototype = superCtor.prototype;
    ctor.prototype = new F();
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
