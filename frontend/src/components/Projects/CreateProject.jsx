import React, { useState } from "react";
import api from "../../api";

const CreateProject = ({ onProjectCreated }) => {

  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await api.post("/projects", {
        name,
        description
      });

      setName("");
      setDescription("");

      onProjectCreated();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button type="submit">
        Create Project
      </button>

    </form>
  );
};

export default CreateProject;