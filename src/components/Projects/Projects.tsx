import './Projects.css';
import { projects, skills } from '../../data';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <div className='content-container'>
            <h1 className='project-page-title'>
                Some recent projects
            </h1>
            <div className='project-page-container' id='card-container'>
                {projects.map(project => <ProjectCard project={project} />)}
            </div>
            <h1 className='project-page-title'>
                Toolbox
            </h1>
            <div className='project-page-container' id='skill-container'>
                {skills.map(skill => 
                    <div className='skill-tile' key={skill.skillName}>
                        {skill.img}
                    </div>
                )} 
            </div>
        </div>
    )
};

export default Projects;
