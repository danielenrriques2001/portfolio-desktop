import UseApp from "@/hooks/UseApp";
import { Project } from "@/types/types";
import { Flex, Text, Image, Link, Box } from "@chakra-ui/react";
import React from "react";
import Gallery from "./Gallery";
import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import SelectedImage from "./SelectedImage";

type Props = {
    project: Project

}

const SelectedProjectItem: React.FC<Props> = ({project}) => {

    const {name, description, images, github, link, stack, id} = project;

    const {setSelectedImage, selectedImage} = UseApp();


    {/**Here it goes the  selectedImage component */}

    if(selectedImage.current) return <SelectedImage id={id} images={images} />


  return (
    <Flex
        flexDirection={'column'}
        alignItems={'center'}
    >
        <Text
            fontSize={'20pt'}
            textTransform={'uppercase'}
            color={'gray.700'}
        >
            {name}
        </Text>
   

        <Flex
            gap={5}
            my={5}
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

        </Flex>

        
           
                  
                
        
        <Text textAlign={'center'}>{description}</Text>

        <Flex
            flexGrow={1}
            justifyContent={'center'}
            mt={'10px'}
            alignItems={'center'}
            gap={5}
            flexDirection={'column'}

        >

        <Text 
            fontSize={'13pt'}
            textAlign={'center'}
            marginTop={'20pt'}
            color={'gray.700'}
            >
            Technologies I have used for this project:
                
        </Text>
        <Flex
        
           
        >
        {
                
                stack.map(tech => (
                    <Flex
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        marginBottom={'15pt'}
                        marginTop={'5pt'}
                        w={'45px'}
                        padding={'5px'}
                        mx={10}
                        
                        
                    >
                    <Image 
                        src={`assets/stack/${tech}.png`} 
                        alt={` this is a icon for ${tech}`}
                        maxW={'100%'}
                        h={'auto'}
                        objectFit={'cover'}
                       
                    />
                        
                    <Text
                        fontSize={'10pt'}
                        color={'gray.600'}
                        fontWeight={400}
                    >
                    {tech}
                    </Text>
                      
                         
                    
                    </Flex>
                    

                ))
            }
            </Flex>

             {/**This is the place for the images component */}
             <Gallery project={project}/>


        </Flex>

    


    </Flex>
    )
}

export default SelectedProjectItem;