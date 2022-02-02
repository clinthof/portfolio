import { projects } from "../../data";
import './Projects.css';

const ProjectCards = () => {
    return (
        <>
            {projects.map(project => 
                <div className='project-card' key={project.id}>
                    <div className='project-thumbnail'>
                        <div className='project-image-wrapper'>
                            {project.image}
                        </div>
                        <div className='project-links'>
                            {project.codeLink && project.codeLink.component}
                            {project.demoLink && project.demoLink.component}
                        </div>
                    </div>
                    <div className='project-info'>
                        <h2 className='project-card-title'>
                            {project.title}
                        </h2>
                        <div className='project-card-description'>
                            <div>Tools: {project.tools}</div>
                            <div className='project-summary'>
                                {project.description}
                            </div>
                        </div>
                    </div>
                </div>
            )}           
        </>
    )
}

export default ProjectCards;