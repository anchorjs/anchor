define({
  
  /**
   * Get the current coordinates of the first element in the set of matched
   * elements, relative to the document.
   *
   * `offset()` returns an object containing the properties `top`, `left`,
   * `width` and `height`, or `null` if the set is empty.
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
   * Examples:
   *
   *     $('#message').offset();
   */
  offset: function() {
    if (!this[0]) return null;
    
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
  }
  
});
