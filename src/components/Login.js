import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        type="text"
        name="username"
        value={formData.userName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
