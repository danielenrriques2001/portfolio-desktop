import UseApp from '@/hooks/UseApp';
import { Project } from '@/types/types';
import { Box, Button, Link } from '@chakra-ui/react'
import { Flex, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

type ProjectProps = {
    project: Project
};

const Project:React.FC<ProjectProps> = ({project}) => {

    const {setSelectedProject, selectedProject} = UseApp()

    const {name, description, github, link, images, stack} = project;


    
    return (
        <Stack>
            <Flex
                marginBottom={2}
                py={3}
                px={2}
                flexDirection={selectedProject.name ? 'column' : 'row'}
                _hover={{backgroundColor: 'gray.100'}}
            >

               
                <Button 
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'row-reverse'}
                    gap={2}
                    textDecoration={'none'}
                    background={'none'}
                    _hover={{textDecoration: 'none'}}
                    onClick={() => setSelectedProject(project)}
                  
                    >
                    <Text
                        fontSize={selectedProject.name ? '30pt' : '15pt'}
                        textTransform={selectedProject.name ? 'uppercase' : 'capitalize'}
                        textColor={selectedProject.name ? 'gray.600' : ''}
                    >
                        {name}
                    </Text>
                    
                    <Image 
                        src={'/assets/project.png'} 
                        alt='this is a project icon'
                        w={'25px'}
                        display={selectedProject.name ? 'none' : ''}
                        
                        />

                </Button>

                {
                        selectedProject.name && <Text textAlign={'center'}>{description}</Text>
                }



                <Flex
                    justifyContent={selectedProject.name  ? 'center' : ''}
                    gap={selectedProject.name ? 2 : 0}
                    paddingTop={selectedProject.name ? '45px' : 0}
                >

                <Link
                    isExternal
                    href={link}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'row-reverse'}
                    _hover={{textDecoration: 'none'}}
                >
                <Text
                        fontSize={'10pt'}
                        textTransform={'capitalize'}
                    >
                        Github
                    </Text>
                    <Image 
                        src={'/assets/github-icon.png'} 
                        alt='this is a project icon'
                        w={'25px'}
                        
                        />

                </Link>

                {
                    selectedProject.name && (
                        <>
                        <Link
                    isExternal
                    href={link}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection={'row-reverse'}
                    _hover={{textDecoration: 'none'}}
                >
                <Text
                        fontSize={'10pt'}
                        textTransform={'capitalize'}
                    >
                        Live
                    </Text>
                    <Image 
                        src={'/assets/project.png'} 
                        alt='this is a project icon'
                        w={'25px'}
                        
                        />

                </Link>
                        
                        
                        </>
                    )
                }

                

                

                </Flex>
                {selectedProject.name && (
                <Text 
                    fontSize={'13pt'}
                    textAlign={'center'}
                    marginTop={'15px'}
                    color={'gray.600'}
                >
                    Technologies I have used for this project:
                
                </Text>)}

                <Flex
                    flexGrow={1}
                    justifyContent={selectedProject.name ? 'center' : 'end'}
                    mt={selectedProject.name ? '10px' : '0'}
                    alignItems={'center'}
                    gap={selectedProject.name ? 5 : 0}
                    

                >
              
                {
                
                        stack.map(tech => (
                            <Flex
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'center'}
                            >
                            <Image 
                                src={`assets/stack/${tech}.png`} 
                                alt={` this is a icon for ${tech}`}
                                maxW={'auto'}
                                maxH={selectedProject.name ? '35px' : '20px'}

                            />
                                
                                {selectedProject.name && (              

                                        <Text
                                            fontSize={'10pt'}
                                            color={'gray.600'}
                                            fontWeight={400}
                                        >
                                            {tech}
                                        </Text>
                              
                                    )}
                            
                            </Flex>
                            

                        ))
                    }

                </Flex>

                {
                    selectedProject.name && (
                        <Flex
                           
                            flexDirection={'column'}
                            gap={3}
                            justifyContent={'center'}
                            align={'center'}
                            mt={5}
                        >
                           {
                            images.map(image => (
                                <Image 
                                    src={`assets/projects/${name}/${image}.png`} 
                                    alt={`this is a image for: ${name}, and image: ${image}`}
                                  
                                    />
                            ))
                           } 
                        </Flex>
                    )
                }
                


                


  


            </Flex>



        </Stack>
    )
}
export default Project;