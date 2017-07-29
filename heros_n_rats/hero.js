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

Hero.prototype.doTask = function(arr, /*key,*/ value, change) {
  console.log(this.toDoList)
  // for (var i=0; i<items.length; i++) {
  // copy.push(items[i])
  // }
  // arr.forEach(function()
  // for (var i=0; i<arr.length; i++)
  //   if(i === value) {
  //     this.toDoList[i].done = change
  //   }
  // }

  this.toDoList = _.find(arr, [value].label, [change]);
  // var temp = []
  // _.find(arr, function(key) { key === value; })
  // arr.done = change
  console.log(this.toDoList)
  // console.log(temp.done)

  // return this.toDoList
}

module.exports = Hero
