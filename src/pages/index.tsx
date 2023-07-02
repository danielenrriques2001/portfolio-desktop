import Head from 'next/head'
import MainComputer from './components/MainComputer'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="porfolio from Daniel Mercedes, Junior Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <body
      >


      <main
      >

        <Flex
          w={'100%'}
          height={'100vh'}
          justifyContent={'center'}
          alignItems={'center'}
          >
          <MainComputer/>
        </Flex>
        
         

        
      </main>
      </body>
    </>
  )
}
