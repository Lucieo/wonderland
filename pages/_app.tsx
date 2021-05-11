import { ChakraProvider } from '@chakra-ui/react'

function WonderlandMotionApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default WonderlandMotionApp
