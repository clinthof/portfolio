import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactElement } from 'react';

interface ProfileData {
    id: string,
    href: string,
    component: ReactElement
}

interface LinkData {
    id: number,
    text: string,
    url: string,
}

interface ProjectData {
    id: number,
    title: string,
    tools: string,
    description: string,
}

const profileLinks: Array<ProfileData> = [
    {
        id: 'github-profile',
        href: 'https://github.com/clinthof',
        component: <GitHubIcon className='social-icon' />,
    },
    {
        href: 'https://www.linkedin.com/in/felix-clinthorne-6a3158123/',
        id: 'linkedin-profile',
        component: <LinkedInIcon className='social-icon' />,
    },
    {
        href: 'https://www.instagram.com/felixclinthorne/',
        id: 'instagram-profile',
        component: <InstagramIcon className='social-icon' />,
    },
]

const navLinks: Array<LinkData> = [
    {
        id: 1,
        text: 'about',
        url: '/about',
    },
    {
        id: 2,
        text: 'projects',
        url: '/projects',
    },
    {
        id: 3,
        text: 'resume',
        url: '/resume',
    },
    {
        id: 4,
        text: 'contact',
        url: '/contact',
    },
];

const projects: Array<ProjectData> = [
    {
        id: 1,
        title: 'GCD Map',
        tools: 'React, python, AWS',
        description: 'description here',
    },
    {
        id: 2,
        title: 'COVID-19 Data Dashboard',
        tools: 'Vue, Firebase',
        description: 'description here',
    },
    {
        id: 3,
        title: 'ArtPrize Mobile Application',
        tools: 'Swift, Objective-C',
        description: 'descriptive description',
    },
];

const skills = [
    {
        skillName: 'Typescript',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt='typescript'
                className='skill-img' 
            />
    },
    {
        skillName: 'Python',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                alt='python'
                className='skill-img' 
                />,
    },
    {
        skillName: 'Java',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" 
                alt='java'
                className='skill-img' 
            />
        ,
    },
    {
        skillName: 'Swift',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" 
                alt='swift'
                className='skill-img' 
            />,
    },
    {
        skillName: 'Kotlin',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain-wordmark.svg"
                alt='kotlin'
            />,
    },
    {
        skillName: 'C',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"
                alt='c-lang'
                className='skill-img' 
                />,
    },
    {
        skillName: 'React',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt='react'
                className='skill-img' 
            />,
    },
    {
        skillName: 'Vue',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                alt='vue'
                className='skill-img'
            />,
    },
    {
        skillName: 'Firebase',
        img: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                alt='firebase'
                className='skill-img' 
            />
    },
    {
        skillName: 'MySQL',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                alt='mysql'
                className='skill-img'
                />
    },
    {
        skillName: 'AWS',
        img: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                alt='aws'
                className='skill-img' 
                />,
    },
    {
        skillName: 'Git',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
                alt='git'
                className='skill-img'
            />,
    },
    {
        skillName: 'Google Cloud',
        img: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"
                alt='gcloud'
                className='skill-img'
            />,
    },
    {
        skillName: 'Docker',
        img: <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                alt='docker'    
            />
    }
]

export {navLinks, projects, profileLinks, skills};