import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import gcdm from '../src/assets/GCDM.png';

interface ProfileData {
    id: string,
    href: string,
    component: JSX.Element
}

interface LinkData {
    id: number,
    text: string,
    url: string,
}

interface ProjectData {
    id: number,
    image: JSX.Element,
    title: string,
    tools: string,
    description: string,
    codeLink: Partial<{ href: string, component: JSX.Element }>,
    demoLink: Partial<{ href: string, component: JSX.Element }>,
}

interface SkillData {
    skillName: string,
    img: JSX.Element,
}

const profileLinks: Array<ProfileData> = [
    {
        id: 'github-profile',
        href: 'https://github.com/clinthof',
        component: <GitHubIcon className='social-icon' id='github-profile'/>,
    },
    {
        id: 'linkedin-profile',
        href: 'https://www.linkedin.com/in/felix-clinthorne-6a3158123/',
        component: <LinkedInIcon className='social-icon' id='linkedin-profile'/>,
    },
    {
        id: 'instagram-profile',
        href: 'https://www.instagram.com/felixclinthorne/',
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
        image: <img className='project-image' alt='gcdm' src={String(gcdm)}/>,
        title: 'Global Civil Discourse Map',
        tools: 'React, Python, AWS',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        codeLink: {
            href: 'https://github.com/clinthof/team-civil-discourse',
            component: <GitHubIcon />
        },
        demoLink: {
            href: 'https://civil-discourse-map.herokuapp.com/',
            component: <OpenInBrowserIcon />
        },
    },
    {
        id: 2,
        image: <img className='project-image' alt='gcdm' src={String(gcdm)}/>,
        title: 'Global Civil Discourse Map',
        tools: 'React, Python, AWS',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        codeLink: {
            href: 'https://github.com/clinthof/team-civil-discourse',
            component: <GitHubIcon />
        },
        demoLink: {},
    },
    {
        id: 3,
        image: <img className='project-image' alt='gcdm' src={String(gcdm)}/>,
        title: 'Global Civil Discourse Map',
        tools: 'React, Python, AWS',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        codeLink: {
            href: 'https://github.com/clinthof/team-civil-discourse',
            component: <GitHubIcon />
        },
        demoLink: {
            href: 'https://civil-discourse-map.herokuapp.com/',
            component: <OpenInBrowserIcon />
        },
    },
];

const skills: Array<SkillData> = [
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
        skillName: 'Next',
        img: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt='next'
                className='skill-img'
        />
    },
    {
        skillName: 'Redux',
        img: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                alt='redux'
                className='skill-img'
        />
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
                className='skill-img'
            />
    },
]

export { navLinks, projects, profileLinks, skills };
export type { ProjectData };
