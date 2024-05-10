import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddProject = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/addproject', {
                title: formData.title,
                content: formData.content,
                author_name: props.match.params.user_name
            });
            alert(`Project added successfully: ${response.data}`);
            history.push(`/${props.match.params.user_name}`);
        } catch (error) {
            console.error('Error adding project:', error);
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="col s12">
                <h4 className='grey-text text-darken-3'>ADD PROJECT</h4>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="title" type="text" className="validate" onChange={handleChange} />
                        <label htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                        <label htmlFor="content">Content</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button className='btn red lighten-1 z-depth-0'>ADD</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProject;
