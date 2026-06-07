import React, { useState } from "react";
import api from "../../api";

const CreateTask = ({ onTaskCreated }) => {

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await api.post("/tasks", {
        title,
        description
      });

      setTitle("");
      setDescription("");

      onTaskCreated();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button type="submit">
        Create Task
      </button>

    </form>
  );
};

export default CreateTask;