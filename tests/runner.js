require.config({
  paths:{
    'anchor': '../',
    'class': '../vendor/class',
    'dom': '../vendor/dom',
    'selector': '../vendor/selector',
    'events': '../vendor/events',
    'ajax': '../vendor/ajax',
    'mocha': 'vendor/mocha/mocha',
    'chai': 'vendor/chai/chai'
  }
});

require(['require',
         'mocha',
         'chai'],
function(require, _mocha, _chai) {
  mocha.setup('bdd');
  
  require(['./suite'],
  function() {
    mocha.run();
  });
});
