import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PROJECTS } from '@/data/projects';
import Project from './Project';
import UseApp from '@/hooks/UseApp';
import SelectedProjectItem from './SelectedProjectItem';

const Projects:React.FC = () => {

    const {selectedProject} = UseApp();


    if(selectedProject?.name) return <SelectedProjectItem project={selectedProject}/>


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