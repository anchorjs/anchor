define(['anchor/dom',
        'chai'],

function($, chai) {
  var expect = chai.expect;

  describe("dom manipulation", function() {
    
    describe('html', function() {
      
      it('should return null for an empty collection', function() {
        var el = $();
        expect(el.offset()).to.be.equal(null);
      });
    
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
    
    describe('text', function() {
      
      it('should return null for an empty collection', function() {
        var el = $();
        expect(el.offset()).to.be.equal(null);
      });
      
      it('should get text of element with text', function() {
        var el = $('#manipulate-text-link-1');
        expect(el.text()).to.be.equal('foo text');
      });
      
      it('should get text of element with html', function() {
        var el = $('#manipulate-text-link-2');
        expect(el.text()).to.be.equal('bar text');
      });
      
      it('should get text of first node in collection of nodes', function() {
        var el = $('#manipulate-text a');
        expect(el.length).to.be.equal(2);
        expect(el.text()).to.be.equal('foo text');
      });
      
      it('should set text of element with text', function() {
        var el = $('#manipulate-text-link-1');
        el.text('lorem text');
        expect(el.text()).to.be.equal('lorem text');
        expect(el.html()).to.be.equal('lorem text');
      });
      
      it('should set text of element with escaped html', function() {
        var el = $('#manipulate-text-link-2');
        el.text('<i>ipsum text</i>');
        expect(el.text()).to.be.equal('<i>ipsum text</i>');
        expect(el.html()).to.be.equal('&lt;i&gt;ipsum text&lt;/i&gt;');
      });
      
      it('should set text of multiple elements', function() {
        var els = $('#manipulate-text a').text('lorem ipsum text');
        
        var el1 = $('#manipulate-text-link-1');
        expect(el1.text()).to.be.equal('lorem ipsum text');
        var el2 = $('#manipulate-text-link-2');
        expect(el2.text()).to.be.equal('lorem ipsum text');
      });
    });
    
  });
  
  return { name: "test.dom.manipulation" }
});
