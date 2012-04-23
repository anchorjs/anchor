define({
  
  /**
   * Get the HTML contents of the first element in the set of matched elements.
   *
   * Examples:
   *
   *     $('#message').html();
   *
   *
   * Sets the HTML contents of each element in the set of matched elements.
   *
   * Examples:
   *
   *     $('#message').html('<b>Welcome!</b>');
   *
   *
   * @param {String} html
   * @return {String|Collection}
   * @api public
   */
  html: function(html) {
    // TODO: Call empty before setting innerHTML.
    return html === undefined ?
      (this[0] ? this[0].innerHTML : null) :
      this.each(function(el) {
        el.innerHTML = html;
      });
  },
  
  text: function(text) {
    // TODO: Implement support for returning HTML, in addition to setting.
    return this.each(function(el) {
      el.textContent = text;
    });
  },
  
  append: function(n) {
    return this.each(function(el) {
      el.appendChild(n);
    });
  }
  
});
