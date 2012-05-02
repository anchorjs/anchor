define(['anchor/dom',
        'chai'],

function($, chai) {
  var expect = chai.expect;

  describe("dom metrics", function() {
    
    describe('offset', function() {
    
      it('should return null for an empty collection', function() {
        var el = $();
        expect(el.offset()).to.be.equal(null);
      });
      
      it('should return offset of element', function() {
        var el = $('#fixtures');
        var offset = el.offset();
        expect(offset.top).to.be.equal(-10000);
        expect(offset.left).to.be.equal(-10000);
        expect(offset.width).to.satisfy(function(num) { return num > 0; });
        expect(offset.height).to.satisfy(function(num) { return num > 0; });
      });
    });
    
    describe('scroll', function() {
    
      it('should return null for an empty collection', function() {
        var el = $();
        expect(el.scroll()).to.be.equal(null);
      });
      
      it('should return scroll of element', function() {
        var el = $('#scroll div');
        var scroll = el.scroll();
        expect(scroll.top).to.be.equal(0);
        expect(scroll.left).to.be.equal(0);
      });
      
      it('should set scroll with x and y', function() {
        var el = $('#scroll div').scroll(20, 10);
        var scroll = el.scroll();
        expect(scroll.top).to.be.equal(10);
        expect(scroll.left).to.be.equal(20);
      });
      
      it('should set scroll with x', function() {
        var el = $('#scroll div').scroll(15);
        var scroll = el.scroll();
        expect(scroll.top).to.be.equal(10);
        expect(scroll.left).to.be.equal(15);
      });
      
      it('should set scroll with y', function() {
        var el = $('#scroll div').scroll(null, 25);
        var scroll = el.scroll();
        expect(scroll.top).to.be.equal(25);
        expect(scroll.left).to.be.equal(15);
      });
    });
    
  });
  
  return { name: "test.dom.metrics" }
});
