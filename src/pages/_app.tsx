import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/global.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <Component {...pageProps} />
         <Footer />
      </ChakraProvider>
   )
}

export default MyApp
