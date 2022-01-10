import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactElement } from 'react';

interface ProfileData {
    href: string,
    id: string,
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
        href: 'https://github.com/clinthof',
        id: 'github-profile',
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
    {
        id: 4,
        title: 'GCD Map',
        tools: 'React, python, AWS',
        description: 'description here',
    },
    {
        id: 5,
        title: 'COVID-19 Data Dashboard',
        tools: 'Vue, Firebase',
        description: 'description here',
    },
    {
        id: 6,
        title: 'ArtPrize Mobile Application',
        tools: 'Swift, Objective-C',
        description: 'descriptive description',
    },
    {
        id: 7,
        title: 'GCD Map',
        tools: 'React, python, AWS',
        description: 'description here',
    },
    {
        id: 8,
        title: 'COVID-19 Data Dashboard',
        tools: 'Vue, Firebase',
        description: 'description here',
    },
    {
        id: 9,
        title: 'ArtPrize Mobile Application',
        tools: 'Swift, Objective-C',
        description: 'descriptive description',
    },
];

export {navLinks, projects, profileLinks};