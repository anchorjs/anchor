/**
 * class
 *
 * This module provides object-oriented programming techniques, including
 * inheritance and mixins, to the Anchor platform.
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
   * This function is principly designed based on the information in Pro
   * JavaScript Design Patterns, Chapter 3: Inheritance.  The function is named
   * `extend` in the book.
   *
   * The behavior of this function is equivalent to that of `inherits()`
   * provided by Node's `util` module.
   *
   * @param {Function} ctor Contructor function that inherits prototype.
   * @param {Function} superCtor Constructor function to inherit prototype from.
   * @api public
   */
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    var F = function() {};
    F.prototype = superCtor.prototype;
    ctor.prototype = new F();
    ctor.prototype.constructor = ctor;
  },
  
  /**
   * Augments the constructor with methods from mixin.
   *
   * @param {Function} ctor Contructor function to augment prototype of.
   * @param {Function} mixin Mixin object used to augment constructor.
   * @api public
   */
  augment: function(ctor, mixin, options) {
    options = options || {};
    var overwrite = (options.overwrite === undefined) ? true : options.overwrite;
    
    // TODO: Implement support for picking the methods to be mixed in.
    
    for (var method in mixin) {
      if (overwrite || !ctor.prototype[method]) {
        ctor.prototype[method] = mixin[method];
      }
    }
  }
  
});
