import { projects, skills } from '../../data';
import { motion } from 'framer-motion';
import { cardWrapVariant, cardVariant } from '../../variants';

const Projects: React.FC = () => {
    return (
        <div 
            className='content-container'
            id='projects-container'
        >
            <h1>Some things I've worked on lately</h1>
            <motion.div
                className='project-page-container'
                id='card-container'
                variants={cardWrapVariant}
                initial='hidden'
                animate='visible'
            >
                {projects.map(project => 
                    <motion.div 
                        key={project.id}
                        variants={cardVariant}
                        className='project-card'
                        style={{'border': '2px solid black'}}
                    >
                        Project
                    </motion.div>)}
            </motion.div>
            <h1 style={{'marginTop': '5%'}}>
                Some tools I've explored
            </h1>
            <motion.div 
                className='project-page-container'
                id='skill-container'
                variants={cardWrapVariant}
                initial='hidden'
                animate='visible'
            >
                {skills.map(skill => 
                    <motion.div 
                        key={skill.skillName}
                        variants={cardVariant}
                        className='skill-tile'
                    >
                        {skill.img}
                    </motion.div>)} 
            </motion.div>
        </div>
    )
};

export default Projects;
