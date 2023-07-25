import { Flex, Text, keyframes } from '@chakra-ui/react';
import React from 'react';
import RightIcons from './RightIcons';
import LeftIcons from './LeftIcons';

type DesktopProps = {
    
};



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
            fontSize={{'base': '3rem', 'md': '8rem'}}
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