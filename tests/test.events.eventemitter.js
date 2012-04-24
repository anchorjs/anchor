define(['anchor/lib/events/eventemitter',
        'chai'],

function(EventEmitter, chai) {
  var expect = chai.expect;

  describe("EventEmitter", function() {
    
    it('should alias addListener to on', function() {
      expect(EventEmitter.prototype.addListener).to.be.equal(EventEmitter.prototype.on);
    });
    
    it('should alias removeListener to off', function() {
      expect(EventEmitter.prototype.removeListener).to.be.equal(EventEmitter.prototype.off);
    });
    
  });
  
  return { name: "test.events.eventemitter" }
});
