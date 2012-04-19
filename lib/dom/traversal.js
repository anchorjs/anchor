define(['./collection'],
function(Collection) {

  function parent() {
    return this.map(function(el) {
      return _relate(el, 'parentNode');
    });
  }
  
  function children() {
    var r = [], el;
    for (var i = 0, len = this.length; i < len; i++) {
      _siblings(this[i].firstChild, r);
    }
    return new Collection(r);
  }

  function next() {
    return this.map(function(el) {
      return _relate(el, 'nextSibling');
    });
  }
  
  function previous() {
    return this.map(function(el) {
      return _relate(el, 'previousSibling');
    });
  }
  
  function _relate(n, rel) {
    n = n[rel];
    while (n && n.nodeType !== 1) {
      n = n[rel];
    }
    return n;
  }
  
  function _siblings(n, r) {
    r = r || [];
    for ( ; n; n = n.nextSibling) {
      if (n.nodeType === 1) {
        r.push(n);
      }
    }
    return r;
  }
  
  return {
    parent: parent,
    children: children,
    next: next,
    previous: previous
  };
});
