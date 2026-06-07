const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  createWorkspace,
  getWorkspaces
} = require("../controllers/workspaceController");

router.post(
  "/",
  authMiddleware,
  createWorkspace
);

router.get(
  "/",
  authMiddleware,
  getWorkspaces
);

module.exports = router;