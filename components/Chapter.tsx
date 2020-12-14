import { Box, Text } from '@chakra-ui/react'
import { IChapter } from 'data/alice'
import React, { useState } from 'react'
import BookNavigation from './BookNavigation'
import Page from './Page'

interface IChapterWrapper extends IChapter {
  nextChapter: number
  prevChapter?: number
}

const Chapter = ({
  title,
  subtitle,
  pages,
  nextChapter,
  prevChapter,
}: IChapterWrapper) => {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <Box paddingBottom={20}>
      <Box paddingY={10}>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontFamily="Dancing Script" fontSize="35px">
          {subtitle}
        </Text>
        <Text>
          page {currentPage + 1} / {pages.length}
        </Text>
      </Box>
      <Page key={currentPage} {...pages[currentPage]} />
      <BookNavigation
        totalPages={pages.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
      />
    </Box>
  )
}

export default Chapter
