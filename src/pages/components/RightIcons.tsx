import UseApp from '@/hooks/UseApp';
import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

type RightIconsProps = {
    
};

const RightIcons:React.FC<RightIconsProps> = () => {
    
    const {modal, setModal} = UseApp();

    const updatedModal = {

    about: {
            view: 'about',
            state: true
        },
    
    projects: {
            view: 'projects',
            state: true
        },
    
    experience: {
            view: 'experience',
            state: true
        }
        
    }

    return (
        <Flex
            flexDirection={'column'}
            gap={10}
        >
            <Button
                onClick={() => {setModal(updatedModal.about)}}
                display={'flex'}
                flexDirection={'column'}
                width={'8rem'}
                margin={0}
                padding={'25px'}
                background={'none'}
                
                _hover={{
                    background: 'none',
                    cursor: 'url(/assets/pointer-icon.png), pointer'
                }}
            >
                <Image 
                    src={'/assets/profile-icon.png'} 
                    alt='this is the github icon'
                    w={'45px'}
                    mb={1}
                    
                    
                    />
                <Text 

                    color={'whiteAlpha.700'}
                    _hover={{
                        textDecoration: 'none', 
                        color: 'whiteAlpha.900'
                    }}
                    
                    
                    >About Me
                </Text>
            </Button>


            <Button
                display={'flex'}
                flexDirection={'column'}
                width={'8rem'}
                margin={0}
                padding={'25px'}
                background={'none'}
                onClick={() => {setModal(updatedModal.projects)}}
                _hover={{
                        background: 'none',
                        cursor: 'url(/assets/pointer-icon.png), pointer'
                    }}
            >
                <Image 
                    src={'/assets/projects-icon-big.png'} 
                    alt='this is the linkedin icon'
                    width={'3rem'}
                    marginBottom={1}
                    
                    
                    
                    />
                <Text                     
                    color={'whiteAlpha.700'}
                    _hover={{
                            textDecoration: 'none', 
                            color: 'whiteAlpha.900'

                        }}
                    >Projects
                </Text>
            </Button>

            <Button
                display={'flex'}
                flexDirection={'column'}
                width={'8rem'}
                margin={0}
                padding={'25px'}
                background={'none'}
                onClick={() => {setModal(updatedModal.experience)}}
                _hover={{
                        background: 'none',
                        cursor: 'url(/assets/pointer-icon.png), pointer'
                    }}
            >
                <Image 
                    src={'/assets/experience-icon-big.png'} 
                    alt='this is the linkedin icon'
                    width={'3rem'}
                    marginBottom={1}
                    
                    
                    
                    />
                <Text                     
                    color={'whiteAlpha.700'}
                    _hover={{
                            textDecoration: 'none', 
                            color: 'whiteAlpha.900'
                        }}
                    >Experience
                </Text>
            </Button>


            


            
        </Flex>
    )
}
export default RightIcons;