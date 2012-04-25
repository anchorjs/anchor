define(['anchor/dom',
        'anchor/lib/dom/collection',
        'chai'],

function($, Collection, chai) {
  var expect = chai.expect;

  describe("dom", function() {
    
    describe('create with nothing', function() {
      var el = $();
      
      it('should be an instance of collection', function() {
        expect(el).to.be.an.instanceOf(Collection);
      });
      it('should be an empty collection', function() {
        expect(el.length).to.be.equal(0);
      });
    });
    
    describe('create with single node', function() {
      var node = document.getElementById('node-1');
      var el = $(node);
      
      it('should be an instance of collection', function() {
        expect(el).to.be.an.instanceOf(Collection);
      });
      it('should wrap node', function() {
        expect(el[0]).to.be.equal(node);
      });
    });
    
    describe('create with multiple nodes', function() {
      var node1 = document.getElementById('node-1');
      var node2 = document.getElementById('node-2');
      var el = $([node1, node2]);
      
      it('should be an instance of collection', function() {
        expect(el).to.be.an.instanceOf(Collection);
      });
      it('should wrap nodes', function() {
        expect(el[0]).to.be.equal(node1);
        expect(el[1]).to.be.equal(node2);
      });
      it('should return itself if wrapped again', function() {
        var elAgain = $(el);
        expect(elAgain).to.be.equal(el);
      });
    });
    
    describe('create with HTML fragment', function() {
      var el = $('<p><b>Hello World</b></p>');
      
      it('should be an instance of collection', function() {
        expect(el).to.be.an.instanceOf(Collection);
      });
      it('should select two nodes', function() {
        expect(el.length).to.be.equal(1);
      });
      it('should select a elements', function() {
        expect(el[0].tagName).to.be.equal('P');
      });
    });
    
    describe('create with CSS selector', function() {
      var el = $('#links a');
      
      it('should be an instance of collection', function() {
        expect(el).to.be.an.instanceOf(Collection);
      });
      it('should select two nodes', function() {
        expect(el.length).to.be.equal(2);
      });
      it('should select a elements', function() {
        expect(el[0].href).to.be.equal('http://www.example.com/link/1');
        expect(el[1].href).to.be.equal('http://www.example.com/link/2');
      });
    });
    
    describe('.create', function() {
      
      it('should create an element', function() {
        var el = $.create('div')
        
        expect(el).to.be.an.instanceOf(Element);
        expect(el.outerHTML).to.be.equal('<div></div>');
      });
      
      it('should create an element with attributes', function() {
        var el = $.create('div', { 'id': 'foo', 'class': 'test' })
        
        expect(el).to.be.an.instanceOf(Element);
        expect(el.outerHTML).to.be.equal('<div id="foo" class="test"></div>');
      });
      
      it('should create an element with text', function() {
        var el = $.create('div', 'Hello')
        
        expect(el).to.be.an.instanceOf(Element);
        expect(el.outerHTML).to.be.equal('<div>Hello</div>');
      });
      
      it('should create an element with attributes and text', function() {
        var el = $.create('div', { 'id': 'foo', 'class': 'test' }, 'Hello')
        
        expect(el).to.be.an.instanceOf(Element);
        expect(el.outerHTML).to.be.equal('<div id="foo" class="test">Hello</div>');
      });
      
    });
    
    describe('.fragment', function() {
      
      it('should create an element', function() {
        var nodes = $.fragment('<p><b>Hello World</b></p>')
        
        expect(nodes).to.have.length(1);
        expect(nodes[0]).to.be.an.instanceOf(Element);
        expect(nodes[0].tagName).to.be.equal('P');
        expect(nodes[0].outerHTML).to.be.equal('<p><b>Hello World</b></p>');
      });
      
      it('should create multiple elements', function() {
        var nodes = $.fragment('<p>Hello World</p><p>I am JavaScript</p>')
        
        expect(nodes).to.have.length(2);
        expect(nodes[0]).to.be.an.instanceOf(Element);
        expect(nodes[0].tagName).to.be.equal('P');
        expect(nodes[0].outerHTML).to.be.equal('<p>Hello World</p>');
        expect(nodes[1]).to.be.an.instanceOf(Element);
        expect(nodes[1].tagName).to.be.equal('P');
        expect(nodes[1].outerHTML).to.be.equal('<p>I am JavaScript</p>');
      });
    
    });
    
    describe('.augment', function() {
      
      it('should augment Collection with functions', function() {
        var mixin = {
          testFoo: function() {},
          testBar: function() {}
        }
        
        expect(Collection.prototype.testFoo).to.not.exist;
        expect(Collection.prototype.testBar).to.not.exist;
        
        var rv = $.augment(mixin);
        
        expect(Collection.prototype.testFoo).to.exist;
        expect(Collection.prototype.testFoo).to.exist;
        
        expect(rv).to.be.equal($);
      });
    
    });
    
  });
  
  return { name: "test.dom" }
});
