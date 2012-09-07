define(['anchor/selector',
        'chai'],

function(selector, chai) {
  var expect = chai.expect;

  describe("selector", function() {
    
    it('should be exported', function() {
      expect(selector).to.exist;
      expect(selector).to.be.a('function');
    });
    
  });
  
  return { name: "test.dom" }
});
