import React,
{
  useEffect,
  useState
}
from "react";

import api from "../../api";

import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";

import "./Tasks.css";

const TaskList = () => {

  const [tasks, setTasks] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async (
    searchText = "",
    statusText = ""
  ) => {

    try {

      let url = "/tasks?";

      if (searchText) {
        url +=
          `search=${searchText}&`;
      }

      if (statusText) {
        url +=
          `status=${statusText}`;
      }

      const response =
        await api.get(url);

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="tasks-page">

      <h2>Tasks</h2>

      <CreateTask
        onTaskCreated={
          fetchTasks
        }
      />

      <input
        type="text"
        placeholder="Search Task"
        value={search}
        onChange={(e) => {

          setSearch(
            e.target.value
          );

          fetchTasks(
            e.target.value,
            status
          );

        }}
      />

      <select
        value={status}
        onChange={(e) => {

          setStatus(
            e.target.value
          );

          fetchTasks(
            search,
            e.target.value
          );

        }}
      >
        <option value="">
          All
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Completed">
          Completed
        </option>

      </select>

      {tasks.map(task => (

        <TaskCard
          key={task._id}
          task={task}
          onStatusUpdated={
            fetchTasks
          }
        />

      ))}

    </div>
  );
};

export default TaskList;