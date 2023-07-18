import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import SearchDesktop from './Layout/SearchDesktop';
import Overlay from './Overlay';
import StartMenu from './StartMenu';
import Desktop from './Desktop';
import ModalComponent from './Modal';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import UseApp from '@/hooks/UseApp';
import { ObjectType } from 'typescript';



const MainComputer:React.FC= () => {

    const MODAL_MODUS = {
        'about': About,
        'projects': Projects,
        'experience' : Experience,
    }

    const {isOn, startMenu, modal } = UseApp();

    const SelectedView = MODAL_MODUS[modal.view as keyof typeof MODAL_MODUS];

    


    
    
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
            <SelectedView/>
        </ModalComponent>
       )}

    </Box>

    </Fragment>
    
    )
}
export default MainComputer;