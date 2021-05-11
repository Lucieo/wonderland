import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface IBookNavigation {
  currentPage: number
  totalPages: number
  setCurrentPage: (pageIndex: number) => void
  nextChapter: number
  prevChapter?: number
  slug: string
  color: string
}

const HomePageBtn = ({ color }) => {
  return (
    <Link href={'/'}>
      <Button colorScheme={color}>Bibliothèque</Button>
    </Link>
  )
}

const BookNavigation = ({
  currentPage,
  setCurrentPage,
  totalPages,
  nextChapter,
  prevChapter,
  slug,
  color,
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
            colorScheme={color}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Précedent
          </Button>
        ) : prevChapter > 0 ? (
          <Link href={`/${slug}/${prevChapter}`}>
            <Button colorScheme={color}>Chapitre Précédent</Button>
          </Link>
        ) : (
          <HomePageBtn color={color} />
        )}
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        {currentPage < totalPages - 1 ? (
          <Button
            colorScheme={color}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Suivant
          </Button>
        ) : nextChapter ? (
          <Link href={`/${slug}/${nextChapter}`}>
            <Button colorScheme={color}>Prochain Chapitre</Button>
          </Link>
        ) : (
          <Link href={'/'}>
            <Button colorScheme={color}>Bibliothèque</Button>
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default BookNavigation
