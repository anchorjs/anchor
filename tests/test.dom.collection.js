define(['anchor/lib/dom/collection',
        'chai'],

function(Collection, chai) {
  var expect = chai.expect;

  describe("Collection", function() {
    
    it('should alias each to forEach', function() {
      expect(Collection.prototype.each).to.be.equal(Collection.prototype.forEach);
    });
    
    describe('empty collection', function() {
      var c = new Collection();
      
      it('should have length of 0', function() {
        expect(c.length).to.be.equal(0);
      });
    });
    
    describe('single element collection', function() {
      var node = document.getElementById('node-1');
      var c = new Collection(node);
      
      it('should have length of 0', function() {
        expect(c.length).to.be.equal(1);
      });
      it('should access node by index', function() {
        expect(c[0]).to.be.equal(node);
      });
    });
    
    describe('multiple element collection', function() {
      var node1 = document.getElementById('node-1');
      var node2 = document.getElementById('node-2');
      var c = new Collection([node1, node2]);
      
      it('should have length of 0', function() {
        expect(c.length).to.be.equal(2);
      });
      it('should access nodes by index', function() {
        expect(c[0]).to.be.equal(node1);
        expect(c[1]).to.be.equal(node2);
      });
      it('should interate using each', function() {
        var iter = [];
        c.each(function(node, i, col) {
          iter.push([node, i, col, this]);
        })
        
        expect(iter[0][0]).to.be.equal(node1);
        expect(iter[0][1]).to.be.equal(0);
        expect(iter[0][2]).to.be.equal(c);
        
        expect(iter[1][0]).to.be.equal(node2);
        expect(iter[1][1]).to.be.equal(1);
        expect(iter[1][2]).to.be.equal(c);
      });
      it('should interate with scope using each', function() {
        var scope = { foo: 'bar' }
        var iter = [];
        c.each(function(node, i, col) {
          iter.push([node, i, col, this]);
        }, scope)
        
        expect(iter[0][0]).to.be.equal(node1);
        expect(iter[0][1]).to.be.equal(0);
        expect(iter[0][2]).to.be.equal(c);
        expect(iter[0][3]).to.be.equal(scope);
        
        expect(iter[1][0]).to.be.equal(node2);
        expect(iter[1][1]).to.be.equal(1);
        expect(iter[1][2]).to.be.equal(c);
        expect(iter[0][3]).to.be.equal(scope);
      });
    });
    
  });
  
  return { name: "test.dom.collection" }
});
