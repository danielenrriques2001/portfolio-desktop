import { Flex, Text, keyframes } from '@chakra-ui/react';
import React from 'react';
import RightIcons from './RightIcons';
import LeftIcons from './LeftIcons';

type DesktopProps = {
    
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

const Desktop:React.FC<DesktopProps> = () => {
    
    return (

        <Flex
           width={'100%'}
           height={'100%'}
           flexDirection={'column'}
           justifyContent={'center'}
           alignItems={'center'}
        >

        <Text
            fontSize={'8rem'}
            fontWeight={900}
            textTransform={'capitalize'}
            textAlign={'center'}
            display={'flex'}
            align={'center'}
            justifyContent={'center'}
        >
            Daniel Mercedes
        </Text>


        <Flex
        
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            paddingX={'20pt'}
            >
                {/* <LeftIcons/> */}
                <RightIcons/>
        </Flex>
        
        
        </Flex>

    )
}
export default Desktop;