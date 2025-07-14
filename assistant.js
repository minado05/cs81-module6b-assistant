function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = null;
}

PersonalAssistant.prototype.addTask = function (task) {
  this.tasks.push(task);
};

PersonalAssistant.prototype.completeTask = function () {
  completedTask = this.tasks.shift();
  console.log("Completing task: ", completedTask, nl);
};

PersonalAssistant.prototype.reportMood = function () {
  console.log("Current mood: ", this.mood, nl);
};
