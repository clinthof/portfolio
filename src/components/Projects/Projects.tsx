import { skills } from '../../data';
import { motion } from 'framer-motion';
import { staggerVariant, cardVariant } from '../../variants';
import './Projects.css';
import ProjectCards from './ProjectCards';

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
                <ProjectCards />
            </motion.div>
        </div>
    )
};

export default Projects;
