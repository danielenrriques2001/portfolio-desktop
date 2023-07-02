import { createContext, useEffect, useState } from "react";
import React from 'react'


export const AppContext = createContext();

const AppProvider = ({children}) => {

    const [isOn, setIsOn] = useState({
       loading: false,
       view: '',
       isLoaded: false
    })

    const [startMenu, setStartMenu] = useState(false);

        const handleIsOn = () => {

            if(isOn.isLoaded) {
                setIsOn({
                    loading: false,
                    view: '',
                    isLoaded: false
                })
             
                return;

            } 


            setIsOn({
                    loading: true,
                    view: 'loading Data...'
                })
                

          
          
          

    }

    useEffect(() => {
        if(isOn.loading) {
            setTimeout(() => {
                setIsOn({
                        loading: false,
                        view: '',
                        isLoaded: true, 
                })
            }, 2000);
        }
    }, [isOn])

    



    

   

    
    return (
        <AppContext.Provider
        value={{
            isOn,
            handleIsOn,
            startMenu,
            setStartMenu
        }}
        >

        {children}
        </AppContext.Provider>
    )
}
export default AppProvider;