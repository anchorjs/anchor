define(function() {
  
  function select(selector, el) {
    return (el || document).querySelectorAll(selector)
  }
  
  return select;
});
