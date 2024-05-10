import React from "react";
import {NavLink} from 'react-router-dom';


const SignedIn = () => {
    return(
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to='/addproject'> Add Project </NavLink></li>
            <li><NavLink to='/'> Logout </NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'> BSKG </NavLink></li>
          </ul>
    )
};


export default SignedIn;