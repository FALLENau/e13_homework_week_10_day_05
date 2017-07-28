var Task = function(task, difficulty, urgency, reward) {
  this.task = task
  this.difficulty = difficulty
  this.urgency = urgency
  this.reward = reward
  this.done = false
}

module.exports = Task
