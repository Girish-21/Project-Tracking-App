import React from "react";
import {NavLink} from 'react-router-dom';


const SignedOut = () => {
    return(
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to='/signin'> Login </NavLink></li>
            <li><NavLink to='/signup'> Sign in </NavLink></li>
          </ul>
    )
};


export default SignedOut;