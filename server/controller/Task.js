const { asyncHandler } = require("../config/asyncHandler");
const errorHandler = require("../error/AppErrors");

const Task = require("../model/task");

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  if (!tasks) {
    return next(new errorHandler("No tasks found", 500));
  }
  res.status(200).json({ count: tasks.length, data: tasks });
});

const createAllTasks = asyncHandler(async (req, res, next) => {
  const task = await Task.create(req.body);

  if (!task) {
    return next(new errorHandler("Task not created", 500));
  }
  res.status(201).json({ success: true, data: task });
});
const getTask = asyncHandler(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Task.findById({ _id: taskID });
  if (!task) {
    return next(new errorHandler("No task found", 404));
  }
  res.status(200).json({ success: true, data: task });
});
const updateTask = asyncHandler(async (req, res, next) => {
  const taskID = req.params.id;
  let task = await Task.findById(taskID);
  if (!task) {
    return next(new errorHandler("No task found", 500));
  }
  task = await Task.findByIdAndUpdate(taskID, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });

  res.status(200).json({ success: true, data: task });
});
const deleteTask = asyncHandler(async (req, res, next) => {
  const taskID = req.params.id;

  const task = await Task.findById(taskID);
  if (!task) {
    return next(new errorHandler("No task found", 500));
  }
  await task.remove();
  res.status(200).json({ success: true, message: "Task deleted successfully" });
});
module.exports = {
  getAllTasks,
  createAllTasks,
  getTask,
  updateTask,
  deleteTask,
};
