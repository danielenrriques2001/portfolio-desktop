import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PROJECTS } from '@/data/projects';
import Project from './Project';
import UseApp from '@/hooks/UseApp';

const Projects:React.FC = () => {

    const {selectedProject, setSelectedProject} = UseApp()
    

    if(selectedProject?.name) return <Project project={selectedProject}/>

    return (
        <Flex
            flexDirection={'column'}
        >
            {
                PROJECTS.map(project => (
                    <Project project={project}/>
                ))
            }
        
        </Flex>
    )
}
export default Projects;