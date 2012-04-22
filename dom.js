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
  
  function dom(nodes) {
    if (!nodes) { return new Collection() }
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
   * Creates a DOM element from an HTML fragment.
   *
   * @param {String} html HTML fragment.
   * @return {Array} DOM elements
   * @api private
   */
  dom.fragment = function(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.childNodes;
  }
  
  return dom;
});
