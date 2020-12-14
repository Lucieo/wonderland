import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

function AliceFramerMotionApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default AliceFramerMotionApp
