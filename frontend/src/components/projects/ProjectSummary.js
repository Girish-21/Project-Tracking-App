import React from "react";

const ProjectSummary = ({ project }) => {

    const createdAt = new Date(project.created_at);

    const date = createdAt.toLocaleDateString();
    const time = createdAt.toLocaleTimeString();

    return (
        <div className='card z-depth-0 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{project.title}</span>
                <p>Posted by {project.author_name}</p>
                <p className='gray-text'>Date: {date}</p>
                <p className='gray-text'>Time: {time}</p>
            </div>
        </div>
    );
}

export default ProjectSummary;
