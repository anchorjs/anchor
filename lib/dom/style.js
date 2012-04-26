define({
  
  show: function(val) {
    return this.forEach(function(el) {
      el.style.display = val || '';
    });
  },
  
  hide: function() {
    return this.forEach(function(el) {
      el.style.display = 'none';
    });
  },
  
  css: function()  {
  }
  
});
