define(['anchor/lib/dom/collection',
        'chai'],

function(Collection, chai) {
  var expect = chai.expect;

  describe("Collection", function() {
    
    describe('empty collection', function() {
      var c = new Collection();
      
      it('should have length of 0', function() {
        expect(c.length).to.be.equal(0);
      });
    });
    
  });
  
  return { name: "test.dom.collection" }
});
