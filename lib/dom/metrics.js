define({
  
  /**
   * Get the current coordinates of the first element in the set of matched
   * elements, relative to the document.
   *
   * Returns `null` if the set is empty.
   *
   * Examples:
   *
   *     $('#message').offset();
   */
  offset: function() {
    if (!this[0]) return null;
    
    var el = this[0]
      , left = el.offsetLeft
      , top = el.offsetTop
      , width = el.offsetWidth
      , height = el.offsetHeight;
    while (el = el.offsetParent) {
      left = left + el.offsetLeft;
      top = top + el.offsetTop;
      if (el != document.body) {
        top -= el.scrollTop
        left -= el.scrollLeft
      }
    }
    return {
      left: left,
      top: top,
      width: width,
      height: height
    }
  }
  
});
