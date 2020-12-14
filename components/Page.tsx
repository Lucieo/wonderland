import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { IPage } from 'data/types'

const Page = ({ animation, paragraphs, type }: IPage) => {
  const AnimationComponent = animation?.component
  return (
    <Box minH="70vh">
      {animation && animation.position === 'top' && <AnimationComponent />}
      {paragraphs.map((paragraph, idx) => (
        <Text
          key={idx}
          paddingY={2}
          textAlign={type === 'text' ? 'left' : 'center'}
        >
          {paragraph}
        </Text>
      ))}
      {animation && animation.position === 'bottom' && <AnimationComponent />}
    </Box>
  )
}

export default Page
