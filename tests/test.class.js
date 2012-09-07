define(['anchor/class',
        'chai'],

function(clazz, chai) {
  var expect = chai.expect;

  describe("class", function() {
    
    it('should be exported', function() {
      expect(clazz).to.exist;
      expect(clazz).to.be.a('object');
    });
    
    it('should export inherits function', function() {
      expect(clazz.inherits).to.exist;
      expect(clazz.inherits).to.be.a('function');
    });
    
    it('should export augment function', function() {
      expect(clazz.augment).to.exist;
      expect(clazz.augment).to.be.a('function');
    });
    
  });
  
  return { name: "test.class" }
});
