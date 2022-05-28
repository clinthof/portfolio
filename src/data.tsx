import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProfileData {
    id: string,
    href: string,
    component: JSX.Element
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

export { profileLinks };
export type { ProjectData };
