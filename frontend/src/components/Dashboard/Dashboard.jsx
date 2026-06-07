import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import api from "../../api";
import "./Dashboard.css";

const Dashboard = () => {

  const [stats, setStats] = useState({
    totalProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {

      const response =
        await api.get("/dashboard/stats");

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="stats-grid">

        <StatsCard
          title="Projects"
          value={stats.totalProjects}
        />

        <StatsCard
          title="Tasks"
          value={stats.totalTasks}
        />

        <StatsCard
          title="Completed"
          value={stats.completedTasks}
        />

        <StatsCard
          title="Pending"
          value={stats.pendingTasks}
        />

      </div>

    </div>
  );
};

export default Dashboard;