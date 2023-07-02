import {extendTheme} from '@chakra-ui/react'


  export const theme = extendTheme({ 

    colors: {
        brand: {
          100: '#FF3c00',
        },
      },
    fonts: {
        body: 'Open Sans, sans-serif'
    },

    styles: {
        global: () => ({
            body: {
                bg: 'gray.400',
                cursor: `url(/assets/pointer-dark.png), pointer`
            }
        })
    },



    
   })
