import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const SignIn = () => {
    const history = useHistory(); 

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/signin', {
                email: formData.email,
                password: formData.password
            });
            if (response.data === true) {
                Cookies.set('user_name',formData.email)
                history.push(`/${formData.email}`);
            } else {
                alert('Incorrect Credentials, Please Retry');
                history.push('/signin');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="col s12">
                <h4 className='grey-text text-darken-3'>Login</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={handleChange}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" onChange={handleChange}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button className='btn red lighten-1 z-depth-0'>LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
