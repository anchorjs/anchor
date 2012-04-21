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
  
  Collection.prototype.each =
  Collection.prototype.forEach = function(fn, scope) {
    for (var i = 0, len = this.length; i < len; i++) {
      fn.call(scope, this[i], i, this);
    }
    return this;
  }
  
  Collection.prototype.map = function(fn, scope) {
    var m = [], n;
    for (var i = 0, len = this.length; i < len; i++) {
      n = fn.call(scope, this[i], i, this);
      if (n) {
        m.push(n);
      }
    }
    return new Collection(m);
  }
  
  return Collection;
});
