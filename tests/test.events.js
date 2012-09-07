define(['anchor/events',
        'chai'],

function(events, chai) {
  var expect = chai.expect;

  describe("events", function() {
    
    it('should be exported', function() {
      expect(events).to.exist;
      expect(events).to.be.a('function');
    });
    
    it('should export Emitter constructor', function() {
      expect(events.Emitter).to.exist;
    });
    
    it('should export EventEmitter constructor', function() {
      expect(events.EventEmitter).to.exist;
    });
    
  });
  
  return { name: "test.events" }
});
