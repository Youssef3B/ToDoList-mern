const Task = require("../models/Task");

//Get All Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get Task From His Id
const getTaskFromHisId = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send({ error: "User not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new Task

const createTask = async (req, res) => {
  try {
    const task = new Task({
      task: req.body.task,
      isFinished: req.body.isFinished,
    });
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Delete a Task From His Id

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// edit Task From His Id

const editTask = async (req, res) => {
  try {
    const TaskId = req.params.id;
    const task = await Task.findByIdAndUpdate(
      TaskId,
      {
        $set: {
          task: req.body.task,
          isFinished: req.body.isFinished,
        },
      },
      { new: true }
    );
    if (task) {
      res.status(200).json({ message: "Task Has been updated successfully." });
    } else {
      res.status(404).json({ message: "Task Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Task Error" });
  }
};

module.exports = {
  editTask,
  deleteTask,
  createTask,
  getTaskFromHisId,
  getAllTasks,
};
