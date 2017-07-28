var Rat = function(name) {
  this.name
}

Rat.prototype.touchFood = function(favFood) {
  this.regenValue -= (this.regenValue * 2)
  console.log(this)
  // return favFood.regenValue
}
//can't seam to get the value to console.log let along return in a format
