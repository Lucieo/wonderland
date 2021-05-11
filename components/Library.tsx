import { books } from 'data/books'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import React, { useState } from 'react'
import BookCover from './BookCover'
import OpenBook from './OpenBook'

const Library = () => {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {selected !== null && (
          <OpenBook
            key={selected}
            bookColor={books[selected].color}
            exitBook={() => setSelected(null)}
            selectedBook={selected !== null && books[selected]}
          />
        )}
      </AnimatePresence>
      {books.map((book, index) => (
        <BookCover
          title={book.title}
          slug={book.slug}
          color={book.color}
          key={index}
          handleClick={() => {
            selected === index ? setSelected(null) : setSelected(index)
          }}
        />
      ))}
    </AnimateSharedLayout>
  )
}

export default Library
