const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects
} = require("../controllers/projectController");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  createProject
);

router.get(
  "/",
  authMiddleware,
  getProjects
);

module.exports = router;