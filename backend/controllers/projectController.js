const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      createdBy: req.user.userId
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getProjects = async (req, res) => {
  try {

    const query = {};

    if (req.query.search) {
      query.name = {
        $regex: req.query.search,
        $options: "i"
      };
    }

    const projects = await Project.find(query)
      .populate("workspace")
      .populate("createdBy", "name email");

    res.status(200).json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  createProject,
  getProjects
};