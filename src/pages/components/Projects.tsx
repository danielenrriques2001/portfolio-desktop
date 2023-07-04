import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PROJECTS } from '@/data/projects';
import Project from './Project';

const Projects:React.FC = () => {
    
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