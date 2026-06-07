import React,
{
  useEffect,
  useState
}
from "react";

import api from "../../api";

import CommentForm from "./CommentForm";

const CommentList = ({ taskId }) => {

  const [comments, setComments] =
    useState([]);

  useEffect(() => {

    fetchComments();

  }, [taskId]);

  const fetchComments = async () => {

    try {

      const response =
        await api.get(
          `/comments/${taskId}`
        );

      setComments(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <h4>Comments</h4>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map(comment => (

          <div
            key={comment._id}
            className="comment-item"
          >

            <strong>
              {comment.user?.name}
            </strong>

            <p>
              {comment.text}
            </p>

          </div>

        ))
      )}

      <CommentForm
        taskId={taskId}
        onCommentAdded={
          fetchComments
        }
      />

    </div>
  );
};

export default CommentList;