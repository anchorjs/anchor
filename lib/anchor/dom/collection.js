define(function() {
  
  function Collection(nodes) {
    this.length = 0;
    if (nodes) {
      nodes = nodes.nodeType ? [nodes] : nodes;
      this.length = nodes.length;
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
