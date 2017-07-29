var Rat = function(name) {
  this.name
}

Rat.prototype.touchFood = function(favFood) {
  favFood.regenValue -= (favFood.regenValue * 2)
  return favFood.regenValue
}
//can't seam to get the value to console.log let along return in a format

module.exports = Rat
