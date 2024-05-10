import React from "react";
import { Link } from "react-router-dom";

const NotificationSummary = ({user_name, project }) => {
    const createdAt = new Date(project.created_at);
    const currentTime = new Date();

    const timeDifference = currentTime.getTime() - createdAt.getTime();

    const seconds = Math.floor(timeDifference / 1000);

    let timeAgo = '';
    if (seconds < 60) {
        timeAgo = `${seconds} seconds ago`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        timeAgo = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        timeAgo = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const days = Math.floor(seconds / 86400);
        timeAgo = `${days} day${days > 1 ? 's' : ''} ago`;
    }

    return (
        <div>
            <Link to={`/${user_name}/project/${project.project_id}`} key={project.project_id}>
              <div className='card z-depth-0 project-summary'>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'>{project.title}</span>
                    <p>Posted by {project.author_name}</p>
                    <p className='gray-text'>Posted {timeAgo}</p>
                </div>
              </div>
            </Link>
        </div>
    );
}

export default NotificationSummary;
