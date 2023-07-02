// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app';
import {theme} from './chakra/theme'
import './global.css'
import AppProvider from '@/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ChakraProvider theme={theme}>
      <AppProvider >
          <Component {...pageProps} />
      </AppProvider>

    </ChakraProvider>
  )
}

export default MyApp;