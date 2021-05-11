import { Text } from '@chakra-ui/react'
import { Iparagraph, ParagraphTypes } from 'data/types'
import React from 'react'
import Censored from './Censored'

const Paragraph = ({ content, type }: Iparagraph) => {
  if (type === ParagraphTypes.CENSORED) {
    return <Censored content={content} />
  } else if (type === ParagraphTypes.QUOTE) {
    return (
      <Text paddingY={2} textAlign="center">
        {content}
      </Text>
    )
  } else
    return (
      <Text paddingY={2} textAlign="left">
        {content}
      </Text>
    )
}

export default Paragraph
