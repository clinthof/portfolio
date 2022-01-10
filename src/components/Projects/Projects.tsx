import React from 'react';
import './Projects.css';
import { projects } from '../../data';
import { CardWrapper } from '../../Styles';

const Projects: React.FC = () => {
    return (
        <div 
            className='content-container'
            id='projects-container'
        >
            <h1>Recent Projects</h1>
            <CardWrapper>
                {projects.map(project => 
                    <div key={project.id}>
                        {project.title} - {project.tools}
                    </div>)}
            </CardWrapper>
        </div>
    )
};

export default Projects;
