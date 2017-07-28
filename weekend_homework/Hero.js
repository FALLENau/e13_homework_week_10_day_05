var Hero = function(name, health, favFood) {
  this.name = name
  this.health = health
  this.favFood = favFood
  this.heroTasks = []
}

Hero.prototype.heroCanTalk = function(){
  return "Hello my name is " + this.name
}

// var heroTasks = [{task: "Save the day", difficulty: 7}, {"Kissed the girl", 10}, {"kick some badguy ass", 4}]
// var batman = new Hero('Batman', 100, 'His Greens')

// console.log(batman.heroCanTalk())
module.exports = Hero
