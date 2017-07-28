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

Hero.prototype.heroEatsFavFood = function() {
  this.health += 25
}

Hero.prototype.addTaskToList = function(task) {
  this.toDoList.push(task)
}

Hero.prototype.a = function() {
}

module.exports = Hero
