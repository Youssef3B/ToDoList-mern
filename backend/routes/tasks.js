const express = require("express");
const {
  getAllTasks,
  getTaskFromHisId,
  createTask,
  deleteTask,
  editTask,
} = require("../controllers/taskController");
const router = express.Router();

/**
 * @Route '/api/Tasks
 * @description Get All Tasks
 * @method GET
 * @public
 */
router.get("/tasks", getAllTasks);

/**
 * @Route '/api/Tasks/:id
 * @description Get User From His Id
 * @method GET
 * @public
 */
router.get("/tasks/:id", getTaskFromHisId);
/**
 * @Route '/api/Tasks
 * @description Create a new Task
 * @method POST
 * @public
 */
router.post("/tasks", createTask);

/**
 * @Route '/api/Task:id
 * @description Delete The Task From his Id
 * @method DELETE
 * @public
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @Route '/api/Task:id
 * @description Edit The Task From his Id
 * @method PUT
 * @public
 */

router.put("/tasks/:id", editTask);
module.exports = router;
