import { projects, skills } from '../../data';
import { motion } from 'framer-motion';
import { staggerVariant, cardVariant } from '../../variants';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div className='content-container'>
            <h1 className='project-page-title'>
                Some tools I've explored
            </h1>
            <motion.div 
                className='project-page-container'
                id='skill-container'
                variants={staggerVariant}
                initial='hidden'
                animate='visible'
            >
                {skills.map(skill => 
                    <motion.div 
                        className='skill-tile'
                        key={skill.skillName}
                        variants={cardVariant}
                    >
                        {skill.img}
                    </motion.div>)} 
            </motion.div>
            <h1 className='project-page-title'>
                Some things I've worked on lately
            </h1>
            <motion.div
                className='project-page-container'
                id='card-container'
                variants={staggerVariant}
                initial='hidden'
                animate='visible'
            >
                {projects.map(project => 
                    <motion.div 
                        className='project-card'
                        key={project.id}
                        variants={cardVariant}
                    >
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
                    </motion.div>)}
            </motion.div>
        </div>
    )
};

export default Projects;
