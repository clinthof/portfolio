import { motion } from 'framer-motion';
import profilePhoto from '../../assets/profile_photo.jpg';
import { profileLinks } from '../../data';
import { 
    photoVariant, 
    aboutBioVariant, 
    bioChildVariant, 
    socialGridVariant,
    socialChildVariant, 
} from '../../variants';

const About: React.FC = () => {
    return (
        <div id='about-page-container'>
            <motion.div 
                className='content-container'
                variants={aboutBioVariant}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className='title'
                    id='about-greeting'
                    variants={bioChildVariant}
                >
                    Hi! I'm Felix.
                </motion.div>
                <motion.div id='about-intro' variants={bioChildVariant}>
                    I'm a recent computer science graduate
                    developing web applications with React.
                </motion.div>
                <motion.div 
                    id='social-links-container'
                    variants={socialGridVariant}
                >
                    {profileLinks.map(socialLink => {
                        return(
                            <motion.div
                                variants={socialChildVariant}
                                key={socialLink.href}
                            >
                                <a  
                                    key={socialLink.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href={socialLink.href}
                                    className='social-link'
                                    id={socialLink.id}
                                >
                                    {socialLink.component}
                                </a>  
                            </motion.div> 
                        )
                    })}
                </motion.div>
            </motion.div>
            <motion.div
                id='about-photo-wrapper'
                variants={photoVariant}
                initial="hidden"
                animate="visible"
            >
                <img
                    id='about-photo' 
                    alt='me'
                    src={String(profilePhoto)}
                />
            </motion.div>
        </div>
    )
};

export default About;
