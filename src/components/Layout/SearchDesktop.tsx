import UseApp from '@/hooks/UseApp';
import { Flex, Image} from '@chakra-ui/react';
import React from 'react';
type SearchDesktopProps = {
    
};

const SearchDesktop:React.FC<SearchDesktopProps> = () => {

    const {handleIsOn, isOn, setStartMenu} = UseApp();    
    return (
        <Flex
        position={'absolute'}
        bottom={0}
        w={'100%'}
        padding={isOn.isLoaded ? '1pt' : '1pt'}
        background={isOn.isLoaded ? 'whiteAlpha.400' : 'gray.300'}
        justify={isOn.isLoaded ? 'start' : 'center'}
        zIndex={1}
        
   
        
        >
           
                <Image 
                
                    src={`/assets/${isOn.isLoaded ? 'start-icon' : 'start-icon-dark'}.png`} 
                    alt='this is the start icon'
                    onClick={() => { 
                        if(isOn.isLoaded) {
                            setStartMenu(true)
                            return;
                        }
                        handleIsOn()
                    }}
                    />

            </Flex>
    )
}
export default SearchDesktop;