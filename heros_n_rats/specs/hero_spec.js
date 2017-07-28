var assert = require("assert")
var Hero = require("../hero.js")
var Task = require("../task.js")
var Food = require("../food.js")

describe("Hero", function(){
  var batman
  var task1
  var task2
  var task3
  var task4
  var favFood
  var food
  var difficulty

  beforeEach(function() {
    batman = new Hero("Batman", 100, "batcakes")
    task1 = new Task("Drive the batmobile", 1, 1, "the thrill of driving the B-mobile")
    task2 = new Task("kick some badguy ass", 4, 4, "batcakes")
    task3 = new Task("Save the day", 7, 10, "The girl")
    task4 = new Task("Kissed the girl", 10, 4, "kisses")
    favFood = new Food("batcakes", 50)
    food = new Food("pizza", 25)
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

  it("the bat eats his favFood to heal a lot, but not go over 100%", function(){
    batman.damageHealth(50)
    batman.heroEatsFood(favFood)
    assert.strictEqual(batman.health, 100)
  })

  it("the bat can add to his todo list", function(){
    batman.addTaskToList(task1)
    assert.strictEqual(batman.toDoList.length, 1)
  })

  it("all the tasks!", function() {
    batman.addTaskToList(task2)
    batman.addTaskToList(task3)
    batman.addTaskToList(task4)
    assert.strictEqual(batman.toDoList.length, 3)
  })//to be updated

  it("da bat can sort his toDoList", function(){
    var newList = batman.toDoList
    batman.addTaskToList(task4)
    batman.addTaskToList(task1)
    batman.addTaskToList(task3)
    batman.addTaskToList(task2)

    batman.sortBy(batman.toDoList, 'difficulty')
    assert.strictEqual(batman.searchByType[0].label, "Drive the batmobile")
  })

})
