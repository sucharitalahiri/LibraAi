const Comment =
  require("../models/Comment");

const addComment = async (
  req,
  res
) => {
  try {

    const comment =
      await Comment.create({
        task: req.body.taskId,
        user: req.user.userId,
        text: req.body.text
      });

    res.status(201).json(comment);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getComments = async (
  req,
  res
) => {
  try {

    const comments =
      await Comment.find({
        task: req.params.taskId
      })
      .populate(
        "user",
        "name email"
      );

    res.json(comments);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  addComment,
  getComments
};