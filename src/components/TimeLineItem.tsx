import { Experience } from '@/types/types';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type TimeLineItemProps = {
    job: Experience
    
};

const TimeLineItem:React.FC<TimeLineItemProps> = ({job}) => {

    const {position, description, year, company} = job;
    
    return (
        <Box
        p={'10px 40px'}
        position={'relative'}
        backgroundColor={'inherit'}
        width={'90%'}
        _after={{
            content: '""',
            position: 'absolute',
            width: '25px',
            height: '25px',
            backgroundColor: 'white',
            top: '15px',
            left: '1px',
            marginLeft: '-3px',
            border: '4px solid',
            borderColor: '#d7915c',
            borderRadius: '50%',
            zIndex: 1
        }}
        >
            <Box
                p={'20px 30px'}
                backgroundColor={'gray.300'}
                position={'relative'}
                borderRadius={'6px'}
                
            >
            <Flex
                flexDirection={'column'}
            >
                <Flex
                    justifyContent={'space-between'}
                   
                >

                <Text
                    fontSize={{'base': '10pt', 'md': '15pt'}}
                    fontWeight={{'base': '500', 'md': '500'}}

                >
                    {position}
                </Text>

                <Text
                    fontSize={{'base': '10pt', 'md': '15pt'}}
                    color={'gray.700'}
    
                >
                   {company}
                    
                </Text> 


                </Flex>
               
                <Text color={'gray.600'}>{year}</Text>
                <Text 
                    fontSize={'10pt'}
                    textAlign={'start'}
                    py={2}
                >
                    {description}
                </Text>
                
            </Flex>

            </Box>

        </Box>
    )
}
export default TimeLineItem;