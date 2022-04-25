import './Landing.css';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/profile_photo.jpg';
import { profileLinks } from '../../data';
import { 
    photoVariant, 
    landingBioVariant, 
    bioChildVariant, 
    socialGridVariant,
    socialChildVariant, 
} from '../../variants';

const Landing: React.FC = () => {
    return (
        <div id='landing-page-container'>
            <motion.div 
                className='content-container'
                id='landing-content-container'
                variants={landingBioVariant}
                initial='hidden'
                animate='visible'
            >
                <motion.div 
                    className='title'
                    id='landing-greeting'
                    variants={bioChildVariant}
                >
                    Hi! I'm Felix.
                </motion.div>
                <motion.div id='landing-intro' variants={bioChildVariant}>
                    I'm a recent computer science graduate
                    developing web applications with React.
                </motion.div>
                <motion.div id='social-links-container' variants={socialGridVariant}>
                    {profileLinks.map(socialLink => {
                        return(
                            <motion.div variants={socialChildVariant} key={socialLink.href}>
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
                id='landing-photo-wrapper'
                variants={photoVariant}
                initial="hidden"
                animate="visible"
            >
                <img id='landing-photo' alt='me' src={String(profilePhoto)} />
            </motion.div>
        </div>
    )
};

export default Landing;
