import { Project } from "@/types/types";

const PROJECTS: Project[] = [

    {
        name: 'gyst',
        stack: ['mongodb', 'nextjs', 'mongoose', 'materialUI', 'stylesComponents'],
        description: 'For my final project I decided to create a website that works as a support for my productivity as a person and as a programmer, implementing tools such as: Pomodoro Timer, Automatic task selector, CHAT GPT Prompt system, expense manager for a particular project. In this project I have obtained the necessary experience and knowledge to make a scalable application.',
        link: 'https://yautia-app-78ea.vercel.app/',
        github: 'https://github.com/danielenrriques2001/yautia-app',
        images: ['gyst-1', 'gyst-2', 'gyst-3', 'gyst-4', 'gyst-5'],
    },
    // {
    //     name: 'uptask',
    //     stack: ['mongodb', 'nextjs', 'moongose', 'headlessUI', 'tailwindcss'],
    //     description: 'In this particular project, I decided to create a website where users can collaborate together on different projects. I think that as a programmer 80% of our time is spent collaborating with the other members of our team. For this reason I have decided to create a project like this, where users can receive in real time the creation of new tasks or their completion.',
    //     link: '',
    //     github: 'https://github.com/danielenrriques2001/upstack_express',
    //     images: []
    // },
    {
        name: 'kiosk',
        stack: ['react', 'reactRouterDom', 'prisma', 'tailwindcss', 'typescript', 'axios', 'swr'],
        description: 'In this project I have decided to implement the simulation for a cafe rodande where customers can order from a screen or on the internet. I have created two views, one for the customer that shows the items and the status of their order; and the other view is for the kitchen staff who can receive the orders and prepare them.',
        link: 'https://kioskku-production.up.railway.app/',
        github: 'https://github.com/danielenrriques2001/kioskku',
        images: ['kiosk-1'],
    }



]

export {
    PROJECTS
}