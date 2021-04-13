import React, { Component } from "react";
import Navbar from "./components/navbar";
import Repositories from "./components/repositories";
import { Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import NotFound from "./components/notFound";
import Login from "./components/login";
import HiddenRoute from "./components/routes/hiddenRoute";
import PrivateRoute from "./components/routes/privateRoute";

class App extends Component {
  state = {
    username: "",
    password: "",
  };

  handleLogout = () => {
    localStorage.removeItem("username");
    this.setState({ username: "" });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar handleLogout={this.handleLogout} />
        <main className="container">
          <Switch>
            <HiddenRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/repositories" component={Repositories} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/notFound" component={NotFound} />
            <PrivateRoute exact path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
