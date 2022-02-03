import './Projects.css';
import { ProjectData } from '../../data';

const ProjectCard: React.FC<{project: ProjectData}> = ({project}) => {
    return (
        <>
            <div className='project-card' key={project.id}>
                <div className='project-thumbnail'>
                    <div className='project-image-wrapper'>
                        {project.image}
                    </div>
                    <div className='project-links'>
                        <div className='project-git-link'>
                            {project.codeLink.component && project.codeLink.component}
                        </div>
                        <div className='project-demo-link'>
                            {project.demoLink.component && project.demoLink.component}
                        </div>
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
        </>
    )
}

export default ProjectCard;