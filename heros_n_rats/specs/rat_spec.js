var assert = require("assert")
var Food = require("../food.js")
var Hero = require("../hero.js")
var rat = require("../rat.js")

describe("Rat", function(){

  beforeEach(function() {
    batman = new Hero("Batman", 100, "batcakes")
    favFood = new Food("batcakes", 50)
    food = new Food("pizza", 25)
    fido = new Rat()
  })

  it("Rat touched bats batcakes!!!!", function(){
    fido.touchFood(favFood)
    assert.strictEqual(favFood.regenValue, -50)
  })

})
