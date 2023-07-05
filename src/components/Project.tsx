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

    const {name, description, github, link, images, stack} = project;



    if(selectedImage.current) return (
        
        <Flex
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            marginBottom={'15pt'}
            marginTop={'5pt'}
            
                                                    
            >
                        <Flex
                            alignItems={'center'}
                            w={'100%'}
                            justifyContent={'space-between'}
                            cursor={'pointer'}
                            transition={'ease-in-out 2s all'}
                            
                        >
                        <ArrowBackIcon 
                                boxSize={6}
                                zIndex={3}
                                onClick={() => {setSelectedImage({})}}
                                
                               
                        />
                        <Text
                            fontSize={'25pt'}
                            textTransform={'uppercase'}
                            color={'gray.400'}
                            fontWeight={200}
                            >
                            {name}
                        </Text>
                        </Flex>
                            
                            <Image 
                                 src={`assets/projects/${name}/${selectedImage.current}.png`} 
                                 alt={` this is a icon for ${selectedImage}`}
                                
                               
                                marginRight={!selectedProject?.name ? '15px' : ''}
                                w={!selectedProject?.name ? '15pt' : ''}
                                h={'auto'}
                               
                            />

                            <Flex
                                justifyContent={'center'}
                                gap={'2rem'}
                                width={'100%'}
                                py={'5px'}
                            >
                                <ArrowLeftIcon
                                    color={'gray.400'}
                                    boxSize={5}
                                    _hover={{color: 'gray.600'}}
                                    cursor={'pointer'}
                                    onClick={() => {
                                        setSelectedImage({
                                            current: images[images.indexOf(selectedImage?.current)  - 1],
                                            prev:  images[images.indexOf(selectedImage?.current)  - 2],
                                            next:  images[images.indexOf(selectedImage?.current)]
                                        })
                                    }}
                                    
                                />
                                <ArrowRightIcon
                                    color={'gray.400'}
                                    boxSize={5}
                                    _hover={{color: 'gray.600'}}
                                    cursor={'pointer'}
                                    onClick={() => {
                                        setSelectedImage({
                                            current: images[images.indexOf(selectedImage?.current)  + 1],
                                            prev: images[images.indexOf(selectedImage?.current)  - 1],
                                            next: images[images.indexOf(selectedImage?.current) + 2]
                                        })
                                    }}
                                />
                            </Flex>
                            
                            </Flex>
    )


    
    return (
        <Stack>
            <Flex
                marginBottom={2}
                px={2}
                flexDirection={selectedProject?.name ? 'column' : 'row'}
                borderBottom={!selectedProject?.name ? '2px solid' : ''}
                borderBottomColor={!selectedProject?.name ? 'blackAlpha.200' : ''}
                paddingY={!selectedProject?.name ? '5' : '3'}
                borderRadius={!selectedProject?.name ? '5' : '0'}
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
                        fontSize={selectedProject?.name ? '30pt' : '15pt'}
                        textTransform={selectedProject?.name ? 'uppercase' : 'capitalize'}
                        textColor={selectedProject?.name ? 'gray.700' : 'blackAlpha.800'}
                    >
                        {name}
                    </Text>
                    
                    <Image 
                        src={'/assets/project-icon.png'} 
                        alt='this is a project icon'
                        w={'30px'}
                        display={selectedProject?.name ? 'none' : ''}
                        
                        />

                </Button>

                {
                        selectedProject.name && <Text textAlign={'center'}>{description}</Text>
                }



                <Flex
                    justifyContent={selectedProject?.name  ? 'center' : ''}
                    gap={selectedProject?.name ? 2 : 0}
                    paddingTop={selectedProject?.name ? '45px' : 0}
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
                {selectedProject?.name && (
                <Text 
                    fontSize={'13pt'}
                    textAlign={'center'}
                    marginTop={'20pt'}
                    color={'gray.600'}
                >
                    Technologies I have used for this project:
                
                </Text>)}

                <Flex
                    flexGrow={1}
                    justifyContent={selectedProject?.name ? 'center' : 'end'}
                    mt={selectedProject?.name ? '10px' : '0'}
                    alignItems={'center'}
                    gap={selectedProject?.name ? 5 : 0}
                    

                >
              
                {
                
                        stack.map(tech => (
                            <Flex
                                flexDirection={'column'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                marginBottom={'15pt'}
                                marginTop={'5pt'}
                                
                                
                            >
                            <Image 
                                src={`assets/stack/${tech}.png`} 
                                alt={` this is a icon for ${tech}`}
                                maxW={'auto'}
                                maxH={selectedProject?.name ? '35px' : '20px'}
                                marginRight={!selectedProject?.name ? '15px' : ''}
                                w={!selectedProject?.name ? '15pt' : ''}
                                h={'auto'}
                               
                            />
                                
                                {selectedProject?.name && (              

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
                            w={'100%'}
                            flexWrap={'wrap'}
                            justifyContent={'center'}
                        >
                           {
                            images.map((image, index) => (
                                <Box 
                                    m={'5px'}
                                    border={'1px solid'}
                                    borderColor={'gray.200'}
                                   
                                    width={'300px'}
                                >
                                <Image 
                                    src={`assets/projects/${name}/${image}.png`} 
                                    alt={`this is a image for: ${name}, and image: ${image}`}
                                    w={'100%'}
                                    height={'auto'}
                                    onClick={() => setSelectedImage({
                                            current: image, 
                                            next: images[index + 1], 
                                            prev: images[index - 1]
                                        })}
                                />


                                </Box>

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