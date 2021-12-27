import React from 'react'
import { projects } from '../../data';
import { CardWrapper } from '../../Styles';

const Projects: React.FC = () => {
    return (
        <div id="projects">
            <h1>Recent Projects</h1>
            <CardWrapper>
                {projects.map(project => 
                    <div key={project.id} style={{'border':'2px solid black'}}>
                        {project.title} - {project.tools}
                    </div>)}
            </CardWrapper>
        </div>
    )
}

export default Projects
