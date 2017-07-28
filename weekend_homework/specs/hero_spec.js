var assert = require("assert")
var Hero = require("../hero.js")

describe("Hero", function(){

  var batman

  beforeEach(function() {
    batman = new Hero("Batman", 100, "his Greens")
  })

  it("The bat has a name", function(){
    assert.strictEqual(batman.name, "Batman")
  })

  it("the bat has health", function(){
    assert.strictEqual(batman.health, 100)
  })
})
