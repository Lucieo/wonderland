import React from 'react'
import Head from 'next/head'
import { Center, Text, Flex, Box } from '@chakra-ui/react'
import Library from 'components/Library'

export default function Home() {
  return (
    <Box backgroundImage={'url("/library.jpg")'} backgroundSize="cover">
      <Center height="100vh" flexDirection="column" py={30}>
        <Box
          background="#FEF6E1"
          width="80vw"
          maxW="1000px"
          p={10}
          borderRadius="10px"
          maxH="100vh"
          overflow={{ md: 'initial', base: 'scroll' }}
        >
          <Head>
            <title>Wonderland</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Box textAlign="center" fontSize="3xl" p={4}>
            <Text fontFamily="Satisfy" fontSize="40px">
              La bibliothèque merveilleuse
            </Text>
          </Box>
          <Flex
            paddingY={10}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
          >
            <Library />
          </Flex>
        </Box>
      </Center>
    </Box>
  )
}
