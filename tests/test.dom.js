define(['anchor/dom',
        'chai'],

function(dom, chai) {
  var expect = chai.expect;

  describe("dom", function() {
    
    it('should be exported', function() {
      expect(dom).to.exist;
      expect(dom).to.be.a('function');
    });
    
    it('should export augment function', function() {
      expect(dom.augment).to.exist;
      expect(dom.augment).to.be.a('function');
    });
    
  });
  
  return { name: "test.dom" }
});
