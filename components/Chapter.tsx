import { Box, Text } from '@chakra-ui/react'
import { IChapter } from 'data/types'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import BookNavigation from './BookNavigation'
import Page from './Page'

interface IChapterWrapper extends IChapter {
  nextChapter: number
  prevChapter?: number
  slug: string
  color: string
}

const chapterVariant = {
  visible: {
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
  hidden: { y: '-20vh' },
}
const MotionBox = motion.custom(Box)

const Chapter = ({
  title,
  slug,
  subtitle,
  pages,
  nextChapter,
  prevChapter,
  color,
}: IChapterWrapper) => {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <>
      <Box paddingBottom={20}>
        <MotionBox variants={chapterVariant} initial="hidden" animate="visible">
          <Box paddingY={10}>
            <Text fontSize="xl" fontWeight="bold">
              {title}
            </Text>
            <Text fontFamily="Satisfy" fontSize="35px">
              {subtitle}
            </Text>
            <Text>
              page {currentPage + 1} / {pages.length}
            </Text>
          </Box>
          <Page key={currentPage} {...pages[currentPage]} />
        </MotionBox>
      </Box>
      <BookNavigation
        totalPages={pages.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
        slug={slug}
        color={color}
      />
    </>
  )
}

export default Chapter
