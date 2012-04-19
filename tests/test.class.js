define(['anchor/class',
        'chai'],

function(klass, chai) {
  var expect = chai.expect;

  describe("class", function() {
    it('shoud pass', function() {
      expect(1).to.equal(1);
    });
  });
  
  return { name: "test.class" }
});
