import React, { Component } from 'react';

import { NavLink} from 'react-router-dom';

class Navbar extends Component {
    state = {  }

    
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container-md">
                    <a className="navbar-brand" href="#">My app </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/repositories">Repositories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/users">Users</NavLink>
                            </li>
                        </ul>
                    </div>
                     <NavLink style={{color: "white"}} className="nav-link badge badge-primary p-2" to="/login" onClick={this.props.handleLogout}><i className="fas fa-sign-out-alt"></i>Logout</NavLink>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;