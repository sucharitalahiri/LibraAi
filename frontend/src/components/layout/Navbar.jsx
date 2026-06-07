import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.clear();

    navigate("/");

  };

  return (
    <nav className="navbar">

      <h2>LibraAI</h2>

      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/tasks">
          Tasks
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
};

export default Navbar;