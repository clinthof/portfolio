interface Params {
    id: number,
    text: string,
    url: string,
}

export const links: Array<Params> = [
    {
        id:1,
        text:'about',
        url:'/',
    },
    {
        id:2,
        text:'projects',
        url:'/projects',
    },
    {
        id:3,
        text:'resume',
        url:'/resume',
    },
    {
        id:4,
        text:'contact',
        url:'/contact',
    },
]