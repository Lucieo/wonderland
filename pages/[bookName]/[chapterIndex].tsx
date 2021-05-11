import React from 'react'
import Chapter from 'components/Chapter'
import { books } from 'data/books'
import { GetStaticPaths } from 'next'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const BookChapter = ({ bookName, chapterIndex }) => {
  const book = books.find((book) => book.slug === bookName)
  const chapter = book.chapters[chapterIndex - 1]
  const nextChapter = Boolean(book.chapters[chapterIndex]) && +chapterIndex + 1
  const prevChapter = chapterIndex - 1
  return (
    <Container maxW="3xl" textAlign="center">
      <Head>
        <title>Wonderland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chapter
        key={chapterIndex}
        slug={book.slug}
        {...chapter}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
        color={book.color}
      />
    </Container>
  )
}

export default BookChapter

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = books
    .map(({ chapters, slug }) =>
      chapters.map((_, index) => `/${slug}/${index + 1}`),
    )
    .flat()
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { chapterIndex, bookName } = context.params
  return {
    props: { chapterIndex, bookName },
  }
}
