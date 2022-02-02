import './Projects.css';
import { skills } from '../../data';
import ProjectCards from './ProjectCards';

const Projects: React.FC = () => {
    return (
        <div className='content-container'>
            <h1 className='project-page-title'>
                Some things I've worked on lately
            </h1>
            <div className='project-page-container' id='card-container'>
                <ProjectCards />
            </div>
            <h1 className='project-page-title'>
                Some tools I've explored
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
