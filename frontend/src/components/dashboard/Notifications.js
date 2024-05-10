import React from 'react';
import NotificationSummary from '../projects/NotificationSummary';


const Notifications = ({user_name, projects}) =>{
    return (
        <div className='project-list section'>
            {projects && projects.map(project => (
                <NotificationSummary user_name={user_name} project={project} />
            ))}
        </div>
    );
}

export default Notifications;