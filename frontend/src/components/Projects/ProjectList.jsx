import React,
{
  useEffect,
  useState
}
from "react";

import api from "../../api";

import ProjectCard from "./ProjectCard";
import CreateProject from "./CreateProject";

import "./Projects.css";

const ProjectList = () => {

  const [projects, setProjects] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async (
    searchText = ""
  ) => {
    try {

      const response =
        await api.get(
          `/projects?search=${searchText}`
        );

      setProjects(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="projects-page">

      <h2>Projects</h2>

      <CreateProject
        onProjectCreated={fetchProjects}
      />

      <input
        type="text"
        placeholder="Search Project"
        value={search}
        onChange={(e) => {

          setSearch(e.target.value);

          fetchProjects(
            e.target.value
          );

        }}
      />

      <div className="projects-grid">

        {projects.map(project => (

          <ProjectCard
            key={project._id}
            project={project}
          />

        ))}

      </div>

    </div>
  );
};

export default ProjectList;