import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/profile_photo.jpg';
import { photoVariant } from '../../variants';

const About: React.FC = () => {
    return (
        <div id='about-page-container'>
            <div id='about-bio'>
                <div id='about-greeting'>
                    A meaningful greeting.
                </div>
                <p>
                    An even more meaningful, endearing, impressive, 
                    and descriptive (but concise) bio.
                </p>
            </div>
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
