import React, { Component } from "react";
import axios from 'axios';
import List from "./list";

class Home extends Component {
  state = {
      loading: false,
      errors: "",
      data: [],
      text: "",
      type: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading: true});
    try {
         const response = await axios.get(`https://api.github.com/${this.state.type}?q=${this.state.text}`);
         this.setState({data: response.data, loading: false})
     } catch (error) {
         this.setState({errors: "Something went wrong", loading: false});
     }
    
 }

  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="row gy-2 gx-3 align-items-center" onSubmit={this.handleSubmit}>
            <div className="col-auto">
              <div className="input-group">
                <input
                    name="text"
                  type="text"
                  className="form-control"
                  value={this.state.text}
                  onChange={this.handleChange}
                  id="text"
                  placeholder="Insert search text"
                />
              </div>
            </div>
            <div className="col-auto">
              <div className="input-group">
                <input
                name="type"
                  type="text"
                  className="form-control"
                  value={this.state.type}
                  onChange={this.handleChange}
                  id="type"
                  placeholder="Insert search type"
                />
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-search mr-2"></i>Search
              </button>
            </div>
          </form>
          <List loading={this.state.loading} errors={this.state.errors} data={this.state.data} type={this.state.type}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
