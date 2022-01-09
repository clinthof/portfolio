import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import profilePhoto from '../../assets/profile_photo.jpg';
import { photoVariant, aboutBioVariant, bioChildVariant, } from '../../variants';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About: React.FC = () => {
    return (
        <div id='about-page-container'>
            <motion.div 
                id='about-bio'
                variants={aboutBioVariant}
                initial="hidden"
                animate="visible"
            >
                <motion.div id='about-greeting' variants={bioChildVariant}>
                   <span>Hi! </span>
                   <span>I'm Felix.</span>
                </motion.div>
                <motion.div id='about-intro' variants={bioChildVariant}>
                    I'm a recent computer science graduate
                    developing web applications with React.
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
            <div id='social-links'>
                <div id='github-profile'>
                    <GitHubIcon />
                </div>
                <div id='linkedin-profile'>
                    <LinkedInIcon />                    
                </div>
                <div id='instagram-profile'>
                    <InstagramIcon />                
                </div>
            </div>
        </div>
    )
};

export default About;
