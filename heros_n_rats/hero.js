var _ = require("lodash")


var Hero = function(name, health, favFood) {
  this.name = name
  this.health = health
  this.favFood = favFood
  this.toDoList = []
}

Hero.prototype.heroCanIntroduceSelf = function() {
  return "Hello my name is " + this.name
}

Hero.prototype.damageHealth = function(dmg) {
  this.health -= dmg
}

Hero.prototype.heroEatsFood = function(foodType) {
  if (foodType.name === this.favFood) {
    this.health += (foodType.regenValue * 1.5)
  } else {
    this.health += foodType.regenValue
  }
  if (this.health >= 100) { this.health = 100}
}

Hero.prototype.addTaskToList = function(task) {
  this.toDoList.push(task)
}

Hero.prototype.searchBy = function(arr, key, direction) {
  this.toDoList = _.orderBy(arr, [key], [direction])
  return this.toDoList
}

Hero.prototype.doTask = function(taskLabel) {
  var taskToBeDone = this.toDoList.find(function (task) {
    return task.label === taskLabel
  })
  taskToBeDone.done = true
}

Hero.prototype.checkHelth = function () {
  
}

module.exports = Hero
