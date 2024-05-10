import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Navbar = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        fetchUserDetails(props.match.params.user_name);
    }, [props.match.params.user_name]);

    const fetchUserDetails = async (user_name) => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${user_name}`);
            if (response.status === 200) {
                const userData = response.data;
                setFirstName(userData.first_name);
                setLastName(userData.last_name);
            } else {
                throw new Error("Failed to fetch user details");
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const handleclick = (e) =>{
        e.preventDefault();
        Cookies.remove('user_name')
        //protected route.
        props.history.push('/signin');
    }

    return (
        <nav className="nav-wrapper red darken-3">
            <div className='container'>
                <Link to={`/${props.match.params.user_name}`} className="brand-logo">
                    <i className="material-icons">water</i>PROJECTS APP 
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to={`/${props.match.params.user_name}/addproject`}> Add Project </NavLink></li>
                    {/* <li><NavLink to='/'> Logout </NavLink></li> */}
                    <li>
                        <NavLink to={`/${props.match.params.user_name}`} className='btn btn-floating blue lighten-1'>
                            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
                        </NavLink>
                    </li>
                    <li>
                        <button className="logout-button" onClick={handleclick}> Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
