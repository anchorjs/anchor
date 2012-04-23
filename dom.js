/**
 * dom
 *
 * This module provides DOM utility functions for simplifying common DOM
 * operations, including traversal, manipulation, etc.
 */
define(['./lib/dom/collection',
        './lib/dom/traversal',
        './lib/dom/manipulation',
        './lib/dom/style',
        './lib/dom/events',
        './selector',
        './class'],
function(Collection, Traversal, Manipulation, Style, Events, select, clazz) {
  
  /**
   * Augment `Collection` with DOM utility functions.
   */
  clazz.augment(Collection, Traversal);
  clazz.augment(Collection, Manipulation);
  clazz.augment(Collection, Style);
  clazz.augment(Collection, Events);
  
  /**
   * Returns a collection of DOM nodes with usable utility functions.
   *
   * @param {Mixed} nodes
   * @return {Collection} DOM element collection
   * @api public
   */
  function dom(nodes) {
    // TODO: Document the various ways of using this function.
    
    if (nodes instanceof Collection) { return nodes }
    if (typeof nodes == 'string') {
      if (/^\s*<([^\s>]+)/.test(nodes)) {
        // HTML fragment
        nodes = dom.fragment(nodes);
      } else {
        // CSS selector
        nodes = select(nodes)
      }
    }
    return new Collection(nodes);
  }
  
  /**
   * Creates a DOM element with tag and optional attributes and text.
   *
   * Examples:
   *
   *     $.create('div');
   *
   *     $.create('p', 'Hello');
   *
   *     $.create('p', { 'id': 'welcome' }, 'Hello Jared');
   *
   * @param {String} tag
   * @param {Object} attrs
   * @param {Object} tag
   * @return {Element} DOM element
   * @api public
   */
  dom.create = function(tag, attrs, text) {
    if (typeof attrs == 'string') {
      text = attrs;
      attrs = {};
    }
    
    var el = document.createElement(tag);
    for (var name in attrs) {
      el.setAttribute(name, attrs[name]);
    }
    if (text) { el.textContent = text }
    return el;
  }
  
  /**
   * Creates a DOM element from an HTML fragment.
   *
   * @param {String} html HTML fragment.
   * @return {Array} DOM elements
   * @api public
   */
  dom.fragment = function(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.childNodes;
  }
  
  dom.augment = function(mixin) {
    clazz.augment(Collection, mixin);
  }
  
  return dom;
});
