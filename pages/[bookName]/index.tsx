import React from 'react'
import Head from 'next/head'
import { Center, Text, Flex, Square, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { gold, romanIndex } from 'data/usefullData'
import { GetStaticPaths } from 'next'
import { books } from 'data/books'
import { motion } from 'framer-motion'

const MotionBox = motion.custom(Box)

const homePageWrapperVariant = {
  hidden: { opacity: 0, y: '-100px' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, when: 'beforeChildren', staggerChildren: 1 },
  },
}

const chapterCardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: { type: 'spring', bounce: 0.6 },
  },
  tap: {
    opacity: 0.4,
  },
}

export default function BookHome({ bookName }) {
  const { title, chapters, slug, homeAnimation } = books.find(
    (book) => book.slug === bookName,
  )
  const AnimationComponent = homeAnimation
  return (
    <Center minH="100vh" flexDirection="column">
      <Head>
        <title>Wonderland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionBox
        variants={homePageWrapperVariant}
        initial="hidden"
        animate="visible"
      >
        <Box textAlign="center" fontSize="3xl" p={4}>
          <Text fontFamily="Satisfy" fontSize="45px">
            {title}
          </Text>
          {homeAnimation && <AnimationComponent />}
        </Box>
        <Flex
          paddingY={10}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
        >
          {chapters.map((chapter, index) => (
            <Box p={4} key={index}>
              <MotionBox
                whileHover="hover"
                whileTap="tap"
                variants={chapterCardVariant}
              >
                <Link href={`/${slug}/${index + 1}`}>
                  <Square
                    size="200px"
                    backgroundImage={`url('/${slug}/${chapter.illustration}')`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    borderRadius="lg"
                    boxShadow="2xl"
                    border="2px solid lightgray"
                    cursor="pointer"
                  >
                    <Text fontSize="50px" fontWeight="bold" color={gold}>
                      {romanIndex[index]}
                    </Text>
                  </Square>
                </Link>
              </MotionBox>
            </Box>
          ))}
        </Flex>
      </MotionBox>
    </Center>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = books.map(({ slug }) => `/${slug}`)
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { bookName } = context.params
  return {
    props: { bookName },
  }
}
