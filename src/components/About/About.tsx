import React from 'react'
import { Greeting } from '../../Styles'
// import { motion } from 'framer-motion'

const About: React.FC = () => {
    return (
        <div style={{
            border: '2px solid blue',
        }}>
            <div style={{
                border: '2px solid green',
                margin: '6px',
            }}>
                <Greeting>Hi, I'm Felix.</Greeting>
                <p>
                    I'm a recent computer science graduate 
                    designing responsive web applications with React.
                </p>
            </div>
        </div>
    )
}

export default About
