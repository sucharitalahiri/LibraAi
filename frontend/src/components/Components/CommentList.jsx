import React, {
  useEffect,
  useState
} from "react";

import api from "../../api";
import CommentForm from "./CommentForm";

const CommentList = ({ taskId }) => {

  const [comments, setComments] =
    useState([]);

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

  useEffect(() => {

    fetchComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId]);

  return (
    <div>

      <h4>Comments</h4>

      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment) => (
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
