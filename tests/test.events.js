define(['anchor/events',
        'chai'],

function(events, chai) {
  var expect = chai.expect;

  describe("events", function() {
    
    it('shoud export EventEmitter', function() {
      expect(events.EventEmitter).to.exist;
    });
    
  });
  
  return { name: "test.events" }
});
