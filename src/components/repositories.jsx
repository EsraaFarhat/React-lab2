import React, { Component } from 'react';

import axios from 'axios'

class Repositories extends Component {
    state = { 
        repos: [],
     }
    

    async componentDidMount(){

        const {data} = await axios.get("https://api.github.com/repositories");

        this.setState({repos: data});
    }

    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container ">
                    <div className="row">
                        {this.state.repos.map(repo => (
                            <div className="col-sm-3 mt-5">
                            <div className="card" style={{height:"15rem"}}>
                                <div className="card-header">
                                    <h5 className="card-title">{repo.name}</h5>
                                </div>
                              <div className="card-body">
                                <p className="card-text">{repo.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Repositories;