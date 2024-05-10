import React, { useState, useEffect } from "react";
import axios from 'axios';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    const [project, setProject] = useState(null);
    const [authorName, setAuthorName] = useState(null);

    useEffect(() => {
        // Fetch project details from the server
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/project/${id}`);
                setProject(response.data);

                // Fetch author details using user_name
                const authorResponse = await axios.get(`http://localhost:8080/user/${response.data.author_name}`);
                setAuthorName(`${authorResponse.data.first_name} ${authorResponse.data.last_name}`);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchProjectDetails();
       }, [id]);

       const handleClick = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/project/${id}`);
            props.history.push(`/${props.match.params.user_name}`);

            if(response.data){
                alert(`${response.data}`);
            }
        } catch (error) {
            console.error('Error deleting project:', error);
        }
       }

    return (
        <center>
        <div className="container section project-details">
            {project ? (
                <div className='card z-depth-0 project-summary'>
                    <div className='card-content'>
                        <span className='card-title'>
                            Project Title - {project.title}
                        </span>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Content: {project.content}</div>
                            <div>Author's User Name: {project.author_name}</div>
                            <div>Author Name: {authorName}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading project details...</div>
            )}
        </div>
        <button className='btn red lighten-1 z-depth-0' onClick={handleClick}>Delete</button>
        </center>
    );
}

export default ProjectDetails;
