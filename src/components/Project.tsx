import UseApp from '@/hooks/UseApp';
import { Project } from '@/types/types';
import { Box, Button, Link } from '@chakra-ui/react'
import { Flex, Stack, Text, Image } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

type ProjectProps = {
    project: Project
};

const Project:React.FC<ProjectProps> = ({project}) => {

    const {setSelectedProject, selectedProject, setSelectedImage, selectedImage} = UseApp()

    const {name, description, github, link, images, stack, id} = project;





    
    return (
        <Stack>
            <Flex
                marginBottom={2}
                px={2}
                flexDirection={'row'}
                borderBottom={'2px solid'}
                borderColor={'gray.200'}
                paddingY={'3'}
                borderRadius={'0'}
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
                        fontSize={'15pt'}
                        textTransform={'capitalize'}
                        textColor={'blackAlpha.800'}
                    >
                        {name}
                    </Text>
                    
                    <Image 
                        src={'/assets/project-icon.png'} 
                        alt='this is a project icon'
                        w={'30px'}
                        
                        />

                </Button>


                <Flex
                >

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

                </Flex>
            </Flex>



        </Stack>
    )
}
export default Project;