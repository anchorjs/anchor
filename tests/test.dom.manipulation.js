define(['anchor/dom',
        'chai'],

function($, chai) {
  var expect = chai.expect;

  describe("dom manipulation", function() {
    
    describe('html', function() {
    
      it('should get html of element with text', function() {
        var el = $('#manipulate-html-link-1');
        expect(el.html()).to.be.equal('foo');
      });
      
      it('should get html of element with html', function() {
        var el = $('#manipulate-html-link-2');
        expect(el.html()).to.be.equal('<b>bar</b>');
      });
    
      it('should get html of first node in collection of nodes', function() {
        var el = $('#manipulate-html a');
        expect(el.length).to.be.equal(2);
        expect(el.html()).to.be.equal('foo');
      });
      
      it('should set html of element with text', function() {
        var el = $('#manipulate-html-link-1');
        el.html('lorem');
        expect(el.html()).to.be.equal('lorem');
      });
      
      it('should set html of element with html', function() {
        var el = $('#manipulate-html-link-2');
        el.html('<i>ipsum</i>');
        expect(el.html()).to.be.equal('<i>ipsum</i>');
      });
      
      it('should set html of multiple elements', function() {
        var els = $('#manipulate-html a').html('<em>lorem ipsum</em>');
        
        var el1 = $('#manipulate-html-link-1');
        expect(el1.html()).to.be.equal('<em>lorem ipsum</em>');
        var el2 = $('#manipulate-html-link-2');
        expect(el2.html()).to.be.equal('<em>lorem ipsum</em>');
      });
    });
    
  });
  
  return { name: "test.dom.manipulation" }
});
