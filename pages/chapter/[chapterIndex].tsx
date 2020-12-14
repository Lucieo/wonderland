import React from 'react'
import Chapter from 'components/Chapter'
import { book } from 'data/alice'
import { GetStaticPaths } from 'next'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const BookChapter = ({ chapterIndex }) => {
  const chapter = book.chapters[chapterIndex - 1]
  const nextChapter = Boolean(book.chapters[chapterIndex]) && +chapterIndex + 1
  const prevChapter = chapterIndex - 1
  return (
    <Container maxW="3xl" textAlign="center">
      <Head>
        <title>Alice Framer Motion App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chapter
        key={chapterIndex}
        {...chapter}
        nextChapter={nextChapter}
        prevChapter={prevChapter}
      />
    </Container>
  )
}

export default BookChapter

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = book.chapters.map((_, index) => `/chapter/${index + 1}`)
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { chapterIndex } = context.params
  return {
    props: { chapterIndex },
  }
}
