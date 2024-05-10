import React, { useState, useEffect } from "react";
import Notifications from "./Notifications";
import Projectslist from "../projects/Projectslist";

const Dashboard = (props) => {
    const [projects, setProjects] = useState([]);
    const [projnots, setProjnots]= useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:8080/projects');
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            } else {
                throw new Error('Failed to fetch projects');
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };


    useEffect(() => {
        fetchProjects1();
    }, []);

    const fetchProjects1 = async () => {
        try {
            const response = await fetch('http://localhost:8080/projnots');
            if (response.ok) {
                const data = await response.json();
                setProjnots(data);
            } else {
                throw new Error('Failed to fetch projects');
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <Projectslist user_name={props.match.params.user_name} projects={projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications user_name={props.match.params.user_name} projects={projnots}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
