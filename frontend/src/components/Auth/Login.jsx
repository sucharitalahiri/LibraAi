import { useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message
      );

    }
  };

  return (
    <form
      className="auth-form"
      onSubmit={handleSubmit}
    >
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;