require.config({
  paths:{
    'anchor': '../',
    'mocha': 'vendor/mocha/1.0.1/mocha',
    'chai': 'vendor/chai/0.5.2/chai'
  }
});

require(['require',
         'mocha',
         'chai'],

function(require, _mocha, _chai) {
  mocha.setup('bdd');
  
  require(['test.class',
           'test.dom',
           'test.dom.collection',
           'test.dom.manipulation'],
  function() {
    mocha.run();
  });
});
