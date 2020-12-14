import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface IBookNavigation {
  currentPage: number
  totalPages: number
  setCurrentPage: (pageIndex: number) => void
  nextChapter: number
  prevChapter?: number
}

const BookNavigation = ({
  currentPage,
  setCurrentPage,
  totalPages,
  nextChapter,
  prevChapter,
}: IBookNavigation) => {
  return (
    <Flex
      width="100%"
      p={4}
      position="fixed"
      left={0}
      right={0}
      maxW="800px"
      bottom={0}
      margin="0 auto"
    >
      <Flex flex={1}>
        {currentPage > 0 ? (
          <Button
            colorScheme="blue"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Précedent
          </Button>
        ) : prevChapter > 0 ? (
          <Link href={`/chapter/${prevChapter}`}>
            <Button colorScheme="blue">Chapitre Précédent</Button>
          </Link>
        ) : (
          <Link href={'/'}>
            <Button colorScheme="blue">Home</Button>
          </Link>
        )}
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        {currentPage < totalPages - 1 ? (
          <Button
            colorScheme="blue"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Suivant
          </Button>
        ) : nextChapter ? (
          <Link href={`/chapter/${nextChapter}`}>
            <Button colorScheme="blue">Prochain Chapitre</Button>
          </Link>
        ) : (
          <Link href={'/'}>
            <Button colorScheme="blue">Home</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default BookNavigation
