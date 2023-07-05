import { Box } from '@chakra-ui/react';
import React from 'react';
import TimeLineItem from './TimeLineItem';
import EXPERIENCE from '@/data/experience';


const TimeLine:React.FC = () => {
    
    return (
        <Box
            position={'relative'}
            maxWidth={'1200px'}
            margin={'0 auto'}
            _after={{
                content: '""',
                position: 'absolute',
                width: '6px',
                backgroundColor: 'white',
                top: 0,
                bottom: 1,
                left: '50px',
                marginLeft: '-3px'
            }}

        >
           {
            EXPERIENCE.length > 2 && EXPERIENCE.map(job => (
                <TimeLineItem job={job} />
            ))
           }


        
        </Box>

    )
}
export default TimeLine;