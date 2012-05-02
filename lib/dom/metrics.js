define({
  
  /**
   * Get the current coordinates of the first element in the set of matched
   * elements, relative to the document.
   *
   * `offset()` returns an object containing the properties `top`, `left`,
   * `width` and `height`, or `null` if the set is empty.
   *
   * Examples:
   *
   *     $('#message').offset();
   *     // => { top: 20, left: 50: width: 300: height: 200 }
   *
   *
   * Transition from jQuery or Zepto:
   *
   * This function is compatible with jQuery.  Note that jQuery returns an
   * object containing only `top` and `left`; `width` and `height` are not
   * available.
   *
   * This function is compatible with Zepto.  Note that Anchor is extended in
   * the same way as Zepto, returning an object containing `width` and `height`,
   * in addition to `top` and `left`.
   *
   *
   * @param {Number} x
   * @param {Number} y
   * @return {Object|Collection}
   * @api public
   */
  offset: function(x, y) {
    if (!this[0]) return null;
    
    // TODO: Implement support for setting offset.
    
    var el = this[0]
      , top = el.offsetTop
      , left = el.offsetLeft
      , width = el.offsetWidth
      , height = el.offsetHeight;
    while (el = el.offsetParent) {
      top = top + el.offsetTop;
      left = left + el.offsetLeft;
      if (el != document.body) {
        top -= el.scrollTop;
        left -= el.scrollLeft;
      }
    }
    return {
      top: top,
      left: left,
      width: width,
      height: height
    }
  },
  
  scroll: function(x, y) {
    if (typeof x == 'number' || typeof y == 'number') {
      return this.each(function(el) {
        if (typeof x == 'number') el.scrollLeft = x;
        if (typeof y == 'number') el.scrollTop = y;
      })
    }
    
    if (!this[0]) return null;
    var el = this[0];
    return {
      top: el.scrollTop,
      left: el.scrollLeft
    };
  },
  
  /**
   * Get the vertical position of the scroll bar for the first element in the
   * set of matched elements.
   *
   * Returns `null` if the set is empty.
   *
   * Examples:
   *
   *     $('#message').scrollTop();
   *
   *
   * Sets the vertical position of the scroll bar for each element in the set of
   * matched elements.
   *
   * Examples:
   *
   *     $('#message').scrollTop(32);
   *
   *
   * The vertical scroll position is the same as the number of pixels that are
   * hidden from view above the scrollable area. If the scroll bar is at the
   * very top, or if the element is not scrollable, this number will be 0.
   *
   *
   * Transition from jQuery or Zepto:
   *
   * This function is compatible with jQuery.  However, Zepto does not implement
   * scrollTop.
   *
   * Transition from Ender/Bonzo:
   *
   * This function is compatible with Bonzo.
   *
   *
   * @param {Number} x
   * @return {Number|Collection}
   * @api public
   */
  scrollTop: function(y) {
    if (y !== undefined) return this.scroll(null, y);
    var s = this.scroll();
    return s ? s.top : null;
  },
  
  scrollLeft: function(x) {
    if (x !== undefined) return this.scroll(x);
    var s = this.scroll();
    return s ? s.left : null;
  }
  
});
