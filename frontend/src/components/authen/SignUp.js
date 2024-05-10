import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: ''
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
            const response = await axios.post('http://localhost:8080/signup', {
                first_name: formData.first_name,
                last_name: formData.last_name,
                user_name: formData.email,
                user_password: formData.password
            });
            alert('Signup successful:', response.data);
            history.push('/signin');
        } catch (error) {
            console.error('Error occurred during signup:', error);
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="col s12">
                <h4 className='grey-text text-darken-3'>SignUp</h4>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" onChange={handleChange}/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" onChange={handleChange}/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
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
                        <button className='btn red lighten-1 z-depth-0'>SignUp</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
