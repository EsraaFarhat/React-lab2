import React, { Component } from 'react';

import axios from 'axios';

class Users extends Component {
    state = { 
        users: [],
     }
    

    async componentDidMount(){

        const {data} = await axios.get("https://api.github.com/users");

        this.setState({users: data});
        console.log(data);
    }

    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container ">
                    <div className="row">
                        {this.state.users.map(user => (
                            <div className="col-sm-3 mt-5">
                            <div className="card" style={{height:"15rem"}}>
                                <div className="card-header">
                                    <h5 className="card-title">{user.login}</h5>
                                </div>
                              <div className="card-body">
                                <img src={user.avatar_url} className="card-img-bottom text-center" style={{marginTop:-10, marginLeft:20,width:"10rem", borderRadius: "50%"}}/>
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
 
export default Users;