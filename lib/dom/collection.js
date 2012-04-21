/**
 * Module definition.
 */
define(function() {
  
  /**
   * `Collection` constructor.
   *
   * This class represents a collection of DOM nodes.  A collection can contain
   * one or more nodes, and may be empty.  In many cases, a collection may
   * contain a single node, in which case it can be logically thought of as not
   * a collection at all, but the node itself.
   *
   * `Collection` has a number of functions that simplify operations on the DOM.
   * When these functions are invoked, they are carried out on all nodes in the
   * collection.
   *
   * @api public
   */
  function Collection(nodes) {
    this.length = 0;
    if (nodes) {
      // cast a single node to an array
      nodes = nodes.nodeType ? [nodes] : nodes;
      this.length = nodes.length;
      // add each node to an index-based property on collection, in order to
      // appear "array"-like
      for (var i = 0, len = nodes.length; i < len; i++) {
        this[i] = nodes[i];
      }
    }
  }
  
  /**
   * Iterate over DOM node collection, executing a function for each node.
   *
   * `fn` is invoked with three arguments:
   *   - the node
   *   - the index of the node
   *   - the collection being iterated over
   *
   * `each()` is aliased to `forEach()` in order to appear `Array`-like.
   *
   * Examples:
   *
   *     col.each(function(node) {
   *       // ...
   *     });
   *
   *     col.each(function(node, i) {
   *       // ...
   *     }, this);
   *
   * Heritage:
   *
   * This function provides similar functionality to jQuery's `each()`, but
   * differs in the order of the arguments passed to `fn`.  In jQuery, the index
   * is the first argument and the element is the second argument.  In Anchor,
   * this order is swapped.  Additionally, in jQuery `this` always refers to the
   * element; whereas in Anchor `this` is determined by `scope`.  These
   * differences are intentional, and in conformance to the ECMAScript 5
   * standard for `Array#forEach`.
   *
   * Bonzo differs in from jQuery in the same way as Anchor.  Anchor and Bonzo
   * are compatible in this regard, with the exception that `forEach` is not
   * aliased by Bonzo.
   *
   * @param {Function} fn Function to execute for each element.
   * @param {Object} scope Object to use as `this` when executing `fn`.
   * @return {Collection} for chaining
   * @api public
   */
  Collection.prototype.each =
  Collection.prototype.forEach = function(fn, scope) {
    for (var i = 0, len = this.length; i < len; i++) {
      fn.call(scope, this[i], i, this);
    }
    return this;
  }
  
  /**
   * Iterate over DOM node collection, creating a new array with the results of
   * executing a function for each node.
   *
   * `fn` is invoked with three arguments:
   *   - the node
   *   - the index of the node
   *   - the collection being iterated over
   *
   * If `fn` returns `undefined`, the result will not be added to the mapped
   * array.
   *
   * Heritage:
   *
   * This function provides similar functionality to jQuery's `map()`, but
   * differs in the order of the arguments passed to `fn`.  In jQuery, the index
   * is the first argument and the element is the second argument.  In Anchor,
   * this order is swapped.  Additionally, in jQuery `this` always refers to the
   * element; whereas in Anchor `this` is determined by `scope`.  Furthermore,
   * jQuery returns a jQuery object, whereas this function returns a standard
   * array.
   *
   * Bonzo differs in from jQuery in the same way as Anchor.  Anchor and Bonzo
   * are compatible in this regard.
   *
   * @param {Function} fn Function to execute for each element.
   * @param {Object} scope Object to use as `this` when executing `fn`.
   * @return {Array}
   * @api public
   */
  Collection.prototype.map = function(fn, scope) {
    var m = [], n;
    for (var i = 0, len = this.length; i < len; i++) {
      n = fn.call(scope, this[i], i, this);
      if (n !== undefined) { m.push(n) }
    }
    return m;
  }
  
  return Collection;
});
