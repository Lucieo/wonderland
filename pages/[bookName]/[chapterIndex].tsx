import React from 'react'
import Chapter from 'components/Chapter'
import { books } from 'data/books'
import { GetStaticPaths } from 'next'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const BookChapter = ({ chapterIndex, bookContent }) => {
  const chapter = bookContent.chapters[chapterIndex - 1]
  const nextChapter =
    Boolean(bookContent.chapters[chapterIndex]) && +chapterIndex + 1
  const prevChapter = chapterIndex - 1
  return (
    <Container maxW="3xl" textAlign="center">
      <Head>
        <title>Wonderland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chapter
        key={chapterIndex}
        slug={bookContent.slug}
        {...chapter}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
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
  const bookContent = books.find((book) => book.slug === bookName)
  return {
    props: { chapterIndex, bookContent },
  }
}
