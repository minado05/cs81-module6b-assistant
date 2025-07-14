function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = null;
}

PersonalAssistant.prototype.addTask = function (task) {
  this.tasks.push(task);
};

PersonalAssistant.prototype.completeTask = function (task) {
  this.tasks = this.tasks.filter((element) => element != task);
  console.log("Completing task: ", task, "\n");
};

//if no argument, complete the first task in the list
PersonalAssistant.prototype.completeTask = function () {
  let task = this.tasks.shift();
  console.log("Completing task: ", task, "\n");
};

PersonalAssistant.prototype.reportMood = function () {
  console.log("Current mood: ", this.mood, "\n");
};

PersonalAssistant.prototype.changeMood = function (mood) {
  this.mood = mood;
};

let myAssistant = new PersonalAssistant("Mina");
myAssistant.addTask("Do laundry");
myAssistant.addTask("Do homework");
myAssistant.addTask("Packing");
myAssistant.addTask("Wash the dishes");
myAssistant.changeMood("stressed");
console.log("Hi! I'm ", myAssistant.name, "your assistant");
console.log("You have ", myAssistant.tasks.length, " left");
myAssistant.reportMood();
myAssistant.completeTask();
myAssistant.completeTask("Packing");
myAssistant.changeMood("normal");
console.log("Now you have ", myAssistant.tasks.length, " left");
myAssistant.reportMood();
