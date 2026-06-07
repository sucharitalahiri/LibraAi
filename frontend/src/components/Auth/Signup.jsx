import { useState } from "react";
import API from "../../api";
import "./Auth.css";

const Signup = () => {

  const [formData, setFormData] =
    useState({
      name: "",
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
          "/auth/signup",
          formData
        );

      alert(response.data.message);

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
      <h2>Signup</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

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
        Sign Up
      </button>
    </form>
  );
};

export default Signup;