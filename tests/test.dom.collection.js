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
      
      it('should interate using map', function() {
        var iter = [];
        var m = c.map(function(node, i, col) {
          iter.push([node, i, col, this]);
          return node.id;
        })
        
        expect(iter[0][0]).to.be.equal(node1);
        expect(iter[0][1]).to.be.equal(0);
        expect(iter[0][2]).to.be.equal(c);
        
        expect(iter[1][0]).to.be.equal(node2);
        expect(iter[1][1]).to.be.equal(1);
        expect(iter[1][2]).to.be.equal(c);
        
        expect(m).to.have.length(2);
        expect(m[0]).to.be.equal('node-1');
        expect(m[1]).to.be.equal('node-2');
      });
      
      it('should interate with scope using map', function() {
        var scope = { foo: 'bar' }
        var iter = [];
        var m = c.map(function(node, i, col) {
          iter.push([node, i, col, this]);
          return node.id;
        }, scope)
        
        expect(iter[0][0]).to.be.equal(node1);
        expect(iter[0][1]).to.be.equal(0);
        expect(iter[0][2]).to.be.equal(c);
        expect(iter[0][3]).to.be.equal(scope);
        
        expect(iter[1][0]).to.be.equal(node2);
        expect(iter[1][1]).to.be.equal(1);
        expect(iter[1][2]).to.be.equal(c);
        expect(iter[1][3]).to.be.equal(scope);
        
        expect(m).to.have.length(2);
        expect(m[0]).to.be.equal('node-1');
        expect(m[1]).to.be.equal('node-2');
      });
      
      it('should add null to results when interating using map', function() {
        var m = c.map(function(node, i, col) {
          if (node.id == 'node-1') { return null }
          return node.id;
        })
        
        expect(m).to.have.length(2);
        expect(m[0]).to.be.equal(null);
        expect(m[1]).to.be.equal('node-2');
      });
      
      it('should add false to results when interating using map', function() {
        var m = c.map(function(node, i, col) {
          if (node.id == 'node-1') { return false }
          return node.id;
        })
        
        expect(m).to.have.length(2);
        expect(m[0]).to.be.equal(false);
        expect(m[1]).to.be.equal('node-2');
      });
      
      it('should not add undefined to results when interating using map', function() {
        var m = c.map(function(node, i, col) {
          if (node.id == 'node-1') { return undefined }
          return node.id;
        })
        
        expect(m).to.have.length(1);
        expect(m[0]).to.be.equal('node-2');
      });
    });
    
  });
  
  return { name: "test.dom.collection" }
});
