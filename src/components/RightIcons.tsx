import UseApp from '@/hooks/UseApp';
import { Button, Flex, Image, Link, Text, keyframes } from '@chakra-ui/react';
import React from 'react';

type RightIconsProps = {
    
};

const float = keyframes`
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

const RightIcons:React.FC<RightIconsProps> = () => {
    
    const {modal, setModal} = UseApp();
    const floatAnimation = `${float} infinite 2s linear`;   

    const updatedModal = [ 

   {
            view: 'about',
            state: true,
        },
    
    {
            view: 'projects',
            state: true,
        },
    
   {
            view: 'experience',
            state: true,
        },
        
    ]

    return (
        <Flex
            gap={5}
        >
            {
                updatedModal.map(modal => (
                    <Button
                display={'flex'}
                flexDirection={'column'}
                width={'25px'}
                height={'25px'}
                margin={0}
                padding={'50px'}
                background={'gray.700'}
                borderRadius={'50%'}
               
                onClick={() => {setModal(modal)}}
                _hover={{
                        background: 'gray.900',
                        cursor: 'url(/assets/pointer-icon.png), pointer',
                        animation: floatAnimation
                    }}
            >
                <Text                
                    fontWeight={200}     
                    color={'whiteAlpha.900'}
                    _hover={{
                            textDecoration: 'none', 
                            color: 'whiteAlpha.900'

                        }}
                    >{modal.view}
                </Text>
            </Button>


                ))
            }

            
        </Flex>
    )
}
export default RightIcons;