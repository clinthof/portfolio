import { projects, skills } from '../../data';
import { motion } from 'framer-motion';
import { cardWrapVariant, cardVariant } from '../../variants';

const Projects: React.FC = () => {
    return (
        <div className='content-container'>
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
                        className='skill-tile'
                        key={skill.skillName}
                        variants={cardVariant}
                    >
                        {skill.img}
                    </motion.div>)} 
            </motion.div>
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
                        className='project-card'
                        key={project.id}
                        variants={cardVariant}
                    >
                        <div className='project-thumbnail'>
                            <div className='project-photo'>Project picture</div>
                            <div className='project-links'>Project links</div>
                        </div>
                        <div className='project-info'>
                            Project info
                        </div>
                    </motion.div>)}
            </motion.div>
        </div>
    )
};

export default Projects;
