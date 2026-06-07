import React, { useState } from "react";
import api from "../../api";

const CommentForm = ({
  taskId,
  onCommentAdded
}) => {

  const [text, setText] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!text.trim()) return;

    try {

      await api.post("/comments", {
        taskId,
        text
      });

      setText("");

      onCommentAdded();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Add Comment"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
};

export default CommentForm;