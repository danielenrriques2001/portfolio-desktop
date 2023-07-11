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
    {
        name: `frank`,
        stack: ['astro', 'react'],
        description: `Within this freelancing project, I honed my time management skills and created a visually captivating website while currently developing a booking system for enhanced functionality.  Our goal was to create a sleek and visually appealing platform that perfectly complements the elegant simplicity of the apartment itself. Upon entering the website, youll be greeted by a clean and uncluttered interface, allowing the apartment's captivating features to take center stage. The carefully chosen color palette and minimalist typography exude a sense of sophistication and modernity, ensuring a seamless browsing experience. High-resolution images grace every page, showcasing the apartment's tastefully curated interior, from the airy living spaces to the cozy bedrooms. The use of white space and intuitive navigation effortlessly guides visitors through the site, making it easy to explore and discover the apartment's unique charm.`,
        link: 'https://franks-apartment.vercel.app/de/',
        github: 'https://github.com/danielenrriques2001/franks-apartment',
        images: ['frank-1', 'frank-2', 'frank-3', 'frank-4']
    },
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