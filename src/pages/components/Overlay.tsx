import UseApp from '@/hooks/UseApp';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';


const Overlay:React.FC = ()  => {

    const { isOn, setIsOn} = UseApp();
    
    return (
        <Flex
            position={'absolute'}
            background={'red.600'}
            w={'100%'}
            h={'100%'}
            top={0}
            bottom={0}
            justify={'center'}
            align={'center'}
            direction={'column'}
            gap={2}
            animation={'ease-in-out all 4.s'}
            
        >
        { isOn.loading && ( 
           
            <Spinner 
                size='xl'
                thickness='10px'
                speed='0.65s'
                emptyColor='gray.200'
                color='gray.500'
            /> 
            )}
            <Text
                fontFamily={'Space Grotesk'}
                fontSize={isOn?.loading ? '20pt' : '30pt'}
                fontWeight={200}
                color={isOn?.loading ? 'blackAlpha.600' : 'blackAlpha.700'}
            >
               {isOn.view}
               

            </Text>
           
           
        
       
           
        </Flex>
    )
}
export default Overlay;