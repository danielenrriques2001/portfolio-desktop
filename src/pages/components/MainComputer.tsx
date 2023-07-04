import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import SearchDesktop from './Layout/SearchDesktop';
import Overlay from './Overlay';
import UseApp from '@/hooks/UseApp';
import StartMenu from './StartMenu';
import Desktop from './Desktop';
import ModalComponent from './Modal';
import LeftIcons from './LeftIcons';
import About from './About';
import Projects from './Projects';

type MainComputerProps = {
    
};

const MainComputer:React.FC<MainComputerProps> = () => {

    const {isOn, startMenu, modal } = UseApp()
    
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
       {isOn.isLoaded && <Desktop/>}
       {startMenu && <StartMenu/>}
       {isOn.loading  &&  <Overlay/>}

       {modal.state && (
        <ModalComponent>
            {modal.view === 'about' && <About/>}
            {modal.view === 'projects' && <Projects/>}
            
        </ModalComponent>
       )}


       

    

    </Box>



   

    </Fragment>
    
    )
}
export default MainComputer;