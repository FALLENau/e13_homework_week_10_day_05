var Task = function(label, difficulty, urgency, reward) {
  this.label = label
  this.difficulty = difficulty
  this.urgency = urgency
  this.reward = reward
  this.done = false
}

module.exports = Task
