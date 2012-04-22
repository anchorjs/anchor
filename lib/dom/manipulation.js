define({
  
  append: function(n) {
    return this.forEach(function(el) {
      el.appendChild(n);
    });
  },
  
  html: function(html) {
    // TODO: Implement support for returning HTML, in addition to setting.
    return this.forEach(function(el) {
      el.innerHTML = html;
    });
  }
  
});
