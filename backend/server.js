require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes =
  require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const userRoutes =
  require("./routes/userRoutes");

app.use("/api/user", userRoutes);

const workspaceRoutes =
  require("./routes/workspaceRoutes");

app.use(
  "/api/workspaces",
  workspaceRoutes
);

const adminRoutes =
  require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);

const projectRoutes =
  require("./routes/projectRoutes");

app.use(
  "/api/projects",
  projectRoutes
);

const taskRoutes =
  require("./routes/taskRoutes");

app.use(
  "/api/tasks",
  taskRoutes
);

const commentRoutes =
  require("./routes/commentRoutes");

app.use(
  "/api/comments",
  commentRoutes
);

const dashboardRoutes =
  require("./routes/dashboardRoutes");

app.use(
  "/api/dashboard",
  dashboardRoutes
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});