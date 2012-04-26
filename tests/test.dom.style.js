define(['anchor/dom',
        'chai'],

function($, chai) {
  var expect = chai.expect;

  describe("dom style", function() {
    
    describe('show', function() {
      var el = document.getElementById('display-none-1');
      
      it('should have initial value of empty string', function() {
        expect(el.style.display).to.be.equal('');
      });
      it('should set value to given value when shown', function() {
        $('#display-none-1').show('block');
        expect(el.style.display).to.be.equal('block');
      });
      it('should set value to empty string when shown', function() {
        $('#display-none-1').show();
        expect(el.style.display).to.be.equal('');
      });
      it('should set value back to none when hidden', function() {
        $('#display-none-1').hide();
        expect(el.style.display).to.be.equal('none');
      });
      
      describe('multiple elements', function() {
        var p1 = document.getElementById('hidden-p-1');
        var p2 = document.getElementById('hidden-p-1');
        var p3 = document.getElementById('hidden-p-1');
        
        it('should set value to given value when shown', function() {
          $('.display-none').show('block');
          expect(p1.style.display).to.be.equal('block');
          expect(p2.style.display).to.be.equal('block');
          expect(p3.style.display).to.be.equal('block');
        });
      });
    });
    
    describe('hide', function() {
      var el = document.getElementById('display-block-1');
      
      it('should have initial value of empty string', function() {
        expect(el.style.display).to.be.equal('');
      });
      it('should set value to none when hidden', function() {
        $('#display-block-1').hide();
        expect(el.style.display).to.be.equal('none');
      });
      it('should set value back to empty string when shown', function() {
        $('#display-block-1').show();
        expect(el.style.display).to.be.equal('');
      });
      
      describe('multiple elements', function() {
        var p1 = document.getElementById('visible-p-1');
        var p2 = document.getElementById('visible-p-1');
        var p3 = document.getElementById('visible-p-1');
        
        it('should set value to given value when shown', function() {
          $('.display-block').hide();
          expect(p1.style.display).to.be.equal('none');
          expect(p2.style.display).to.be.equal('none');
          expect(p3.style.display).to.be.equal('none');
        });
      });
    });
    
  });
  
  return { name: "test.dom.show" }
});
