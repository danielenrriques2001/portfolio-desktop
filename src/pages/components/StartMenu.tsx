import UseApp from '@/hooks/UseApp';

import {
    Box,
    Button,
    Image,
    Stack

  } from '@chakra-ui/react'

const StartMenu = () => {

    const {startMenu,setStartMenu, handleIsOn} = UseApp();
    
  
    return (
      <Box
        height={'100%'}
        width={'200px'}
        position={'absolute'}
        zIndex={2}
        top={1}
        right={0}
        background={'whiteAlpha.900'}
        overflowX={'hidden'}
        transition={'0.5s'}
        paddingTop={'60px'}
        borderLeftRadius={'15px'}
        shadow={'dark-lg'}
      >
        <Image 
          src={'/assets/shut-down-big.png'} 
          alt='this is a close tab image'
          position={'absolute'}
          top={-1}
          left={-1}
          w={20}
         
          transition={'all 4s ease-in-out'}
          onClick={() => setStartMenu(false)}
          
         
          />

          <Stack
            marginTop={'5rem'}
          >
            <Button
              fontFamily={'Space Grotesk'}
              color={'gray.600'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              onClick={() => {handleIsOn(); setStartMenu(false)}}

            >

              <Image 
                src={'/assets/closetab-icon.png'} 
                alt='this is a list item icon'   
                w={'40px'}     
              />

              Shut Down

            </Button>
            <Button
                fontFamily={'Space Grotesk'}
                color={'gray.600'}
            >
              <Image 
                src={'/assets/dark-mode-big.png'} 
                alt='this is a list item icon'   
                w={'35px'}     
              />

              Dark Mode

            </Button>
            
          </Stack>


      </Box>
    )
  }

export default StartMenu;