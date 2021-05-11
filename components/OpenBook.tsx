import { Box, IconButton, Center, Flex, Text, Square } from '@chakra-ui/react'
import { Book } from 'data/types'
import { motion } from 'framer-motion'
import React from 'react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { gold, romanIndex } from 'data/usefullData'

interface IOpenBook {
  selectedBook: Book
  bookColor?: string
  exitBook: () => void
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

const MotionBox = motion.custom(Box)
const MotionCenter = motion.custom(Center)

const OpenBook = ({ bookColor, exitBook, selectedBook }: IOpenBook) => {
  const AnimationComponent = selectedBook.homeAnimation
  const {
    slug,
    chapters,
    title,
    homeAnimation,
    author,
    abstract,
  } = selectedBook

  return (
    <MotionCenter
      height="100vh"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <MotionBox
        layoutId={`book-${slug}`}
        minHeight="80vh"
        width="80vw"
        maxW="1000px"
        maxH="800px"
        shadow="xl"
        position="fixed"
        borderColor={`${bookColor}.700`}
        borderWidth="20px"
        bg="#FDF6E3"
        borderRadius="lg"
        p={2}
        zIndex={10}
        overflow={{ lg: 'initial', base: 'scroll' }}
      >
        <Flex p={4} height="100%" flexDirection={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            p={4}
            textAlign="center"
            height="100%"
            flexDir="column"
            borderRight="1px solid lightgay"
            justifyContent="space-between"
          >
            <IconButton
              aria-label="Search database"
              icon={<ArrowBackIcon />}
              variant="ghost"
              isRound
              width="30px"
              colorScheme={bookColor}
              onClick={exitBook}
            />
            <Box height="75%">
              {homeAnimation && (
                <Link href={`/${slug}/1`}>
                  <Box marginBottom={4}>
                    <AnimationComponent />
                  </Box>
                </Link>
              )}
              <Text
                fontFamily="Satisfy"
                fontSize="35px"
                pt="30px"
                pb="15px"
                lineHeight="1.2"
              >
                {title}
              </Text>
              <Text fontSize="xl" fontFamily="Open Sans">
                {author}
              </Text>
              <Text pt={4} fontFamily="Open Sans" fontSize="14px">
                {abstract}
              </Text>
            </Box>
          </Flex>
          <Flex flex={1} p={4} borderRadius="xl">
            <Box>
              <Flex wrap="wrap" justifyContent="center">
                {chapters.map((chapter, index) => (
                  <Box p={4} key={index}>
                    <MotionBox
                      whileHover="hover"
                      whileTap="tap"
                      variants={chapterCardVariant}
                    >
                      <Link href={`/${slug}/${index + 1}`}>
                        <Square
                          size="150px"
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
            </Box>
          </Flex>
        </Flex>
      </MotionBox>
    </MotionCenter>
  )
}

export default OpenBook
