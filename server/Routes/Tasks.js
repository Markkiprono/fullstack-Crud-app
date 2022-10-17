const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createAllTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/Task");
router.use(express.json());
router.route("/").get(getAllTasks).post(createAllTasks);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
