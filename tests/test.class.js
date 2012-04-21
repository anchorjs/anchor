define(['anchor/class',
        'chai'],

function(clazz, chai) {
  var expect = chai.expect;

  describe("class", function() {
    
    describe(".inherits", function() {
      function Animal() {};
      function Lion() {};
      clazz.inherits(Lion, Animal);
      
      it('shoud restore constructor', function() {
        expect(Lion.prototype.constructor).to.be.equal(Lion);
      });
      
      it('shoud set super_ property', function() {
        expect(Lion.super_).to.be.equal(Animal);
      });
      
      it('shoud create instances of superclass', function() {
        var lion = new Lion();
        expect(lion).to.be.an.instanceOf(Lion);
        expect(lion).to.be.an.instanceOf(Animal);
      });
      
      describe('using super_ property in constructor', function() {
        function Animal(says) {
          this._says = says;
        };
        Animal.prototype.say = function() {
          return this._says;
        }
        
        function Cat() {
          Cat.super_.call(this, 'meow');
          // => Animal.call(this, 'meow');
        }
        clazz.inherits(Cat, Animal);
        
        it('should access super constructor', function() {
          var cat = new Cat();
          expect(cat.say()).to.be.equal('meow');
        });
      });
      
      describe('using super_ property in method', function() {
        function Animal(says) {
          this._says = says;
        };
        Animal.prototype.say = function() {
          return this._says;
        }
        
        function Dog() {
          Dog.super_.call(this, 'woof');
        }
        clazz.inherits(Dog, Animal);
        
        Dog.prototype.say = function() {
          var noise = Dog.super_.prototype.say.call(this);
          // => var noise = Animal.prototype.say.call(this);
          return noise + ' ' + noise;
        }
        
        it('should access super method through super prototype', function() {
          var dog = new Dog();
          expect(dog.say()).to.be.equal('woof woof');
        });
      });
      
    });
    
    describe(".augment", function() {
      
      it('should mix in single function', function() {
        function Alien() {};
        var Mixin = {
          foo: function() { return 'foo'; }
        }
        clazz.augment(Alien, Mixin);
        
        expect(Alien.prototype.foo).to.be.a('function');
      });
      
      it('should mix in multiple functions', function() {
        function Alien() {};
        var Mixin = {
          multiFoo: function() { return 'foo'; },
          multiBar: function() { return 'foo'; }
        }
        clazz.augment(Alien, Mixin);
        
        expect(Alien.prototype.multiFoo).to.be.a('function');
        expect(Alien.prototype.multiBar).to.be.a('function');
      });
      
      it('should overwrite by default', function() {
        function Alien() {};
        Alien.prototype.say = function() { return 'we come in peace' }
        var Mixin = {
          say: function() { return 'nanoo nanoo'; },
        }
        clazz.augment(Alien, Mixin);
        
        var alien = new Alien();
        expect(alien.say()).to.be.equal('nanoo nanoo');
      });
      
      it('should not overwrite when option is set to false', function() {
        function Alien() {};
        Alien.prototype.say = function() { return 'we come in peace' }
        var Mixin = {
          say: function() { return 'nanoo nanoo'; },
        }
        clazz.augment(Alien, Mixin, { overwrite: false });
        
        var alien = new Alien();
        expect(alien.say()).to.be.equal('we come in peace');
      });
      
    });
    
  });
  
  return { name: "test.class" }
});
