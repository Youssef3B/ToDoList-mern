const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    maxLength: 200,
  },
  isFinished: {
    type: Boolean,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
