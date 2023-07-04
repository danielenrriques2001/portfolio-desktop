import { Button, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

type LeftIconsProps = {
    
};

const LeftIcons:React.FC<LeftIconsProps> = () => {
    
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
                
                _hover={{
                    background: 'none',
                    cursor: 'url(/assets/pointer-icon.png), pointer'
                }}
            >
                <Image 
                    src={'/assets/github-icon.png'} 
                    alt='this is the github icon'
                    w={'45px'}
                    
                    
                    />
                <Link 

                    color={'whiteAlpha.700'}
                    href={'https://github.com/danielenrriques2001'}
                    _hover={{
                        textDecoration: 'none', 
                        color: 'whiteAlpha.900',
                        cursor: 'url(/assets/pointer-icon.png), pointer'
                    }}
                    isExternal
                    
                    
                    >Github
                </Link>
            </Button>


            <Button
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
                    src={'/assets/linkedin-icon.png'} 
                    alt='this is the linkedin icon'
                    w={'30px'}
                    marginBottom={1}
                    
                    
                    
                    />
                <Link 
                    href={'https://www.linkedin.com/in/daniel-mercedes-885616257/'}
                    
                    isExternal
                    color={'whiteAlpha.700'}
                    _hover={{
                            textDecoration: 'none', 
                            color: 'whiteAlpha.900',
                            cursor: 'url(/assets/pointer-icon.png), pointer'
                        }}
                    >Linkedin
                </Link>
            </Button>


            
        </Flex>
    )
}
export default LeftIcons;