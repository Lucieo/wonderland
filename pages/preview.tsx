import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import {
  BouncingBunny,
  AliceFalling,
  KeyOnDoor,
  DrinkMe,
  AliceLeaves,
} from 'animations/alice'
import Head from 'next/head'

const Preview = () => {
  return (
    <Center minH="100vh" flexDirection="column" paddingY={4}>
      <Head>
        <title>Alice Framer Motion App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text paddingTop={6} fontSize="2xl">
        Les animations
      </Text>
      <Box p={10}>
        <DrinkMe />
      </Box>
      <Box p={10}>
        <KeyOnDoor />
      </Box>
      <Box p={10}>
        <AliceFalling />
      </Box>
      <Box p={10}>
        <BouncingBunny />
      </Box>
    </Center>
  )
}

export default Preview
