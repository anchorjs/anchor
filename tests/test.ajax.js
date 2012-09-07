define(['anchor/ajax',
        'chai'],

function(ajax, chai) {
  var expect = chai.expect;

  describe("ajax", function() {
    
    it('should be exported', function() {
      expect(ajax).to.exist;
      expect(ajax).to.be.a('object');
    });
    
    it('should export request function', function() {
      expect(ajax.request).to.exist;
      expect(ajax.request).to.be.a('function');
    });
    
    it('should export get function', function() {
      expect(ajax.get).to.exist;
      expect(ajax.get).to.be.a('function');
    });
    
  });
  
  return { name: "test.ajax" }
});
