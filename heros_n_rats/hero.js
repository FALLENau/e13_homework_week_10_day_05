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

Hero.prototype.doTask = function(arr, key, value, change) {
  console.log(this.toDoList)
  // this.toDoList = _.find(arr, [value].label, [change]);

  var found = _.find(arr, function(key) { return key === value; });
  console.log(found)
  return this.toDoList
}

Hero.prototype.checkTaskIsDone = function() {

}

module.exports = Hero
