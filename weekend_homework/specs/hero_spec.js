var assert = require("assert")
var Hero = require("../hero.js")
var Task = require("../task.js")

describe("Hero", function(){
  var batman
  var task1

  beforeEach(function() {
    batman = new Hero("Batman", 100, "his Greens")
    task1 = new Task("Drive the batmobile", 1, 1,"cake")
  })

  it("The bat has a name", function(){
    assert.strictEqual(batman.name, "Batman")
  })

  it("the bat has health", function(){
    assert.strictEqual(batman.health, 100)
  })

  it("the bat has been hit by the joker", function(){
    batman.damageHealth(25)
    assert.strictEqual(batman.health, 75)
  })

  it("the bat eats to heal", function(){
    batman.damageHealth(25)
    batman.heroEatsFavFood()
    assert.strictEqual(batman.health, 100)
  })

  it("the bat can add to his todo list", function(){
    batman.addTaskToList(task1)
    assert.strictEqual(batman.toDoList.length, 1)
  })

  xit("all the tasks!", function() {
    batman.addTaskToList({
      task: "Save the day", difficulty: 7
    })
    batman.addTaskToList({
      task: "Kissed the girl", difficulty: 10
    })
    batman.addTaskToList({
      task: "kick some badguy ass", difficulty: 4
    })
    assert.strictEqual(batman.toDoList.length, 3)
  })//to be updated

})
