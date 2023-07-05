

export type Project = {
    name: string;
    stack: string[];
    description: string;
    link: string;
    github: string;
    images: string[]
}

export type Experience = {
    position: string;
    year: string;
    description: string;
    company: string;
    project?: string;

}