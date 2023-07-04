import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type AboutProps = {
    
};

const About:React.FC<AboutProps> = () => {
    
    return (
    <Box>

        <Text
            textAlign={'justify'}
            color={'gray.800'}
            marginBottom={1}
        >
            
          I'm Daniel Mercedes <Text fontWeight={500}>(Daniel Enriques Mercedes Santos, actually)</Text> a Junior Software Developer originally from La Romana, 
          Dominican Republic, currently based in Berlin, Germany. 
          I'm passionate about:
        </Text>
        <Stack>
            <Text>🧠 Psychology </Text>
            <Text  color={'red.500'}>💻 Clean Code (this one makes me feel alive!) </Text>
            <Text>🧘 Well-Being </Text>
            <Text>📚 Reading and Research 
               I'm currently reading: <br/>
                - Calm the fuck down  <br/>
                - Code Complete, 2dth edition
            </Text>
            <Text>🌐 Languages (Computer and Human languages) </Text>
            
        </Stack>

    </Box>
    )
}
export default About;