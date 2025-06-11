import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projects = [
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' },
    ];

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
}

export default Projects;