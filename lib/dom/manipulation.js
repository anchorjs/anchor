define({
  
  append: function(n) {
    return this.forEach(function(el) {
      el.appendChild(n);
    });
  }
  
});
