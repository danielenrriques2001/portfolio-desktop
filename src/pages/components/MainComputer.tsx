import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import SearchDesktop from './Layout/SearchDesktop';
import Overlay from './Overlay';
import UseApp from '@/hooks/UseApp';
import StartMenu from './StartMenu';

type MainComputerProps = {
    
};

const MainComputer:React.FC<MainComputerProps> = () => {

    const {isOn, startMenu } = UseApp()
    
    return (

    <Fragment
        
    >
    <Box
        w={'90%'}
        h={'600px'}
        border={'20px solid'}
        borderColor={'black.700'}
        borderRadius={'15px'}
        position={'relative'}

        backgroundImage={ isOn.isLoaded ? '/assets/background-anime.png' : ''}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}    
    >   
      
       <SearchDesktop/>
       {startMenu && <StartMenu/>}
       {isOn.loading  &&  <Overlay/>}


       

    

    </Box>



   

    </Fragment>
    
    )
}
export default MainComputer;