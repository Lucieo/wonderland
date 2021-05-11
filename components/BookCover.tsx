import { Box, Text, Center } from '@chakra-ui/react'
import React from 'react'
import { gold } from 'data/usefullData'
import { motion } from 'framer-motion'

const MotionBox = motion.custom(Box)

interface IBookCover {
  title: string
  slug: string
  color: string
  handleClick: () => void
}

const BookCover = ({ title, slug, color, handleClick }: IBookCover) => {
  return (
    <Box py={4} px={4} onClick={handleClick}>
      <MotionBox
        layoutId={`book-${slug}`}
        height="300px"
        width="200px"
        shadow="xl"
        bg={`${color}.700`}
        borderRadius="md"
        cursor="pointer"
        p={2}
        whileHover={{ scale: 1.1 }}
      >
        <Center
          borderColor={gold}
          borderWidth={1}
          borderRadius="md"
          height="100%"
        >
          <Text
            textAlign="center"
            color={gold}
            fontFamily="Satisfy"
            fontSize="2xl"
          >
            {title}
          </Text>
        </Center>
      </MotionBox>
    </Box>
  )
}

export default BookCover
