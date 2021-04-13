import React, { useReducer, useContext } from "react";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router";

const Login = () => {
  const reducer = (prev, next) => ({ ...prev, ...next });

  const history = useHistory();
  const [{ username, password, errors }, setState] = useReducer(reducer, {
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      setState({ username, password });
      localStorage.setItem("username", username);
      setState({ username: "", password: "" });
      history.push("/home");
      return;
    }
    setState({ errors: "Username or password is not valid" });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setState({ [inputName]: value });
  };

  return (
    <React.Fragment>
      <h4 className={errors? "alert alert-danger mt-3": ""}>{errors}</h4>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="username"
            type="text"
            autoFocus
            value={username}
            onChange={handleChange}
            className="form-control"
            id="username"
            placeholder="username"
          />
        </div>
        <div className="mb-3">
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            className="form-control"
            id="password"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-sign-in-alt mr-2"></i>
          Login
        </button>
      </form>
    </React.Fragment>
  );
};

export default Login;
