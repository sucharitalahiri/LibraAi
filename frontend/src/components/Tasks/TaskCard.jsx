import React from "react";
import api from "../../api";
import CommentList from "../Components/CommentList";

const TaskCard = ({
  task,
  onStatusUpdated
}) => {

  const changeStatus = async (
    newStatus
  ) => {

    try {

      await api.patch(
        `/tasks/${task._id}/status`,
        {
          status: newStatus
        }
      );

      onStatusUpdated();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="task-card">

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong>{" "}
        {task.status}
      </p>

      <p>
        <strong>Project:</strong>{" "}
        {task.project?.name ||
          "No Project"}
      </p>

      <p>
        <strong>Assigned To:</strong>{" "}
        {task.assignedTo?.name ||
          "Unassigned"}
      </p>

      <select
        value={task.status}
        onChange={(e) =>
          changeStatus(
            e.target.value
          )
        }
      >
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
        <CommentList
  taskId={task._id}
/>
    </div>
  );
};

export default TaskCard;