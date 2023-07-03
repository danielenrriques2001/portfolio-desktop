import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

type RightIconsProps = {
    
};

const RightIcons:React.FC<RightIconsProps> = () => {
    
    return (
        <Flex
            flexDirection={'column'}
            gap={10}
        >
            <Button
                display={'flex'}
                flexDirection={'column'}
                width={'8rem'}
                margin={0}
                padding={'25px'}
                background={'none'}
                
                _hover={{background: 'none'}}
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
                
                _hover={{
                        background: 'none'
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
                
                _hover={{
                        background: 'none'
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