import { Project } from '@/types/types';
import { Button, Link } from '@chakra-ui/react'
import { Flex, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

type ProjectProps = {
    project: Project
};

const Project:React.FC<ProjectProps> = ({project}) => {

    const {name, description, github, link, images, stack} = project;
    
    return (
        <Stack>
            <Flex
                marginBottom={2}
                py={3}
                px={2}

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
                    
                  
                    >
                    <Text
                        fontSize={'15pt'}
                        textTransform={'capitalize'}
                    >
                        {name}
                    </Text>
                    <Image 
                        src={'/assets/project.png'} 
                        alt='this is a project icon'
                        w={'25px'}
                        
                        />

                </Button>
                <Link
                    isExternal
                    href={github}
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

                <Flex
                    flexGrow={1}
                    justifyContent={'end'}
                    alignItems={'center'}
                >
                {
                        stack.map(tech => (
                            <Image 
                                src={`assets/stack/${tech}.png`} 
                                alt={` this is a icon for ${tech}`}
                                maxW={'auto'}
                                maxH={'20px'}
                            />
                        ))
                    }

                </Flex>
                


  


            </Flex>



        </Stack>
    )
}
export default Project;