const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {

    const task = await Task.create({
      title: req.body.title,
      description: req.body.description
      // project: req.body.projectId,
      // assignedTo: req.body.assignedTo
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getTasks = async (req, res) => {
  try {

    const query = {};

    if (req.query.status) {
      query.status = req.query.status;
    }

    if (req.query.search) {
      query.title = {
        $regex: req.query.search,
        $options: "i"
      };
    }

    const tasks = await Task.find(query)
      .populate("assignedTo", "name email")
      .populate("project", "name");

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateTaskStatus = async (
  req,
  res
) => {
  try {

    const task =
      await Task.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status
        },
        {
          new: true
        }
      );

    res.status(200).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createTask,
  getTasks,
  updateTaskStatus
};