import { Flex } from '@chakra-ui/react';
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
        justifyContent={'space-between'}
        paddingTop={'45pt'}
        paddingX={'20pt'}
        >
               <LeftIcons/>
               <RightIcons/>
        </Flex>
    )
}
export default Desktop;