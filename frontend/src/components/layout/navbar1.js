import React from "react";
import {NavLink, Link } from 'react-router-dom';


const Navbar1 = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className='container'>
                <Link to={`/`} className="brand-logo">
                    <i className="material-icons">water</i>PROJECTS APP 
                </Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li><NavLink to='/signin'> Login </NavLink></li>
                  <li><NavLink to='/signup'> Sign in </NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar1;
