const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

// const roleMiddleware =
//   require("../middleware/roleMiddleware");

const {
  createTask,
  getTasks,
  updateTaskStatus
} = require("../controllers/taskController");

router.post(
  "/",
  authMiddleware,
  createTask
);

router.get(
  "/",
  authMiddleware,
  getTasks
);

router.patch(
  "/:id/status",
  authMiddleware,
  updateTaskStatus
);

module.exports = router;
