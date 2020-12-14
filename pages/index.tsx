import React from 'react'
import Head from 'next/head'
import { Center, Text, Flex, Box } from '@chakra-ui/react'
import { books } from 'data/books'

export default function Home() {
  return (
    <Center height="100vh" flexDirection="column">
      <Head>
        <title>Wonderland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box textAlign="center" fontSize="3xl" p={4}>
        <Text>La grand bibliothèque</Text>
      </Box>
      <Flex
        paddingY={10}
        flexDirection={{ base: 'column', lg: 'row', xl: 'row' }}
        alignItems="center"
      >
        {/* {book.chapters.map((chapter, index) => (
          <Box p={4} key={index}>
            <Link href={`/chapter/${index + 1}`}>
              <Square
                size="200px"
                backgroundImage={`url('/alice/${chapter.illustration}')`}
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius="lg"
                boxShadow="2xl"
                border="2px solid lightgray"
                cursor="pointer"
              >
                <Text fontSize="50px" fontWeight="bold" color="#D4AF37">
                  {chapter.romanIndex}
                </Text>
              </Square>
            </Link>
          </Box>
        ))} */}
      </Flex>
    </Center>
  )
}
