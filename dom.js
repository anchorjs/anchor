/**
 * dom
 *
 * This module provides DOM utility functions for simplifying common DOM
 * operations, including traversal, manipulation, etc.
 *
 * Heritage:
 *
 * jQuery is the predominant DOM utility in use across the web today.  This
 * module provides analogous functionality to the Anchor platform.  Wherever
 * possible and practical, this module attempts to be compatible with the jQuery
 * jQuery API.  However, in the spirit of defining a next-generation, modular
 * JavaScript platform, no effort is made to reproduce the DOM-related
 * functionality of jQuery in its entirety.  When deviations occur, they are
 * in the interest of conforming to JavaScript standards, rather than conforming
 * to jQuery expectations.
 *
 * Ender (specifically Bonzo in relation to the DOM) is similiar in spirit to
 * the goals of the Anchor platform.  Both this module and Bonzo are generally
 * compatible, due to the shared goal of compatibility with jQuery's API.
 */
define(['./lib/dom/collection',
        './lib/dom/traversal',
        './lib/dom/manipulation',
        './lib/dom/style',
        './lib/dom/events',
        './selector',
        './class'],
function(Collection, Traversal, Manipulation, Style, Events, select, clazz) {
  
  clazz.augment(Collection, Traversal);
  clazz.augment(Collection, Manipulation);
  clazz.augment(Collection, Style);
  clazz.augment(Collection, Events);
  
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
