import React from "react";
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const Projectslist = ({user_name, projects }) => {
    return (
        <div className='project-list section'>
            {projects && projects.map(project => (
                <Link to={`/${user_name}/project/${project.project_id}`} key={project.project_id}>
                    <ProjectSummary project={project} />
                </Link>
            ))}
        </div>
    );
}

export default Projectslist;
