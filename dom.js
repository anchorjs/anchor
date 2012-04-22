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
  
  /**
   * Augment Collection with DOM utility functions.
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
    // TODO: This function needs fixes for container elements and IE
    //       compatibility.
    // TODO: For simple HTML element strings, create using createElement, rather
    //       than innerHTML, which may be a performance optimization.
    
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.childNodes;
  }
  
  return dom;
});
