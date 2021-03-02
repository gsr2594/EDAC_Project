import React, {Component} from "react";
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route } from "react-router-dom"
import Login from "./Login.js";
import Register from "./Project/Register.js";
// import Links from "./Project/Links.js";
import {NavLink,NavItem,Navbar} from "reactstrap";

class Header extends Component{
    render(){
        return (
        <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <a className="navbar-brand" href="Dashboard.html">
                Personal Project Management Tool
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

                <NavItem>
                    <NavLink href="register">Sign up</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="login">Log in</NavLink>
                </NavItem>
            </div>
        </div>
    </nav>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/register" component={Register}></Route>
    </Router>
    
    
    )
        }
    }

export default Header;