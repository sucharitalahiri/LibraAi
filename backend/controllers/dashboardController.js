const Project = require("../models/Project");
const Task = require("../models/Task");

const getStats = async (req, res) => {
  try {

    const totalProjects =
      await Project.countDocuments();

    const totalTasks =
      await Task.countDocuments();

    const completedTasks =
      await Task.countDocuments({
        status: "Completed"
      });

    const pendingTasks =
      await Task.countDocuments({
        status: "Pending"
      });

    const inProgressTasks =
      await Task.countDocuments({
        status: "In Progress"
      });

    res.status(200).json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks,
      inProgressTasks
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getStats
};