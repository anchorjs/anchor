define(['./dom/collection',
        './dom/traversal',
        './dom/manipulation',
        './dom/style',
        './dom/events',
        './selector',
        './class'],
function(Collection, Traversal, Manipulation, Style, Events, select, klass) {
  
  klass.augment(Collection, Traversal);
  klass.augment(Collection, Manipulation);
  klass.augment(Collection, Style);
  klass.augment(Collection, Events);
  
  function dom(nodes) {
    if (typeof nodes == 'string') { nodes = select(nodes) }
    return new Collection(nodes);
  }
  
  dom.create = function(tag, attrs, content) {
    //var el = dom(document.createElement(tag));
    // TODO: Find a convention for what to return here.  Wrapped DOM node,
    //       or native DOM node?
    var el = document.createElement(tag);
    // TODO: Implement support for this stuff.
    if (attrs) el.attr(attrs);
    if (content) el.html(content);
    return el;
  }
  
  // TODO: This should be handled automatically within create().
  // http://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
  dom.fromHTML = function(str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    var elements = div.childNodes;
    return new Collection(elements);
  }
  
  return dom;
});
