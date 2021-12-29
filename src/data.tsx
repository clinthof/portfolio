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

const links: Array<LinkData> = [
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
]

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
]

export {links, projects};