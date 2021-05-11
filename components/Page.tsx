import React from 'react'
import { Box } from '@chakra-ui/react'
import { IPage } from 'data/types'
import { motion } from 'framer-motion'
import Paragraph from './Paragraph'

export const opacityChangeVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: { opacity: 0 },
}

const MotionBox = motion.custom(Box)

const Page = ({ animation, paragraphs }: IPage) => {
  const AnimationComponent = animation?.component
  return (
    <Box minH="70vh" width="80%" margin="0 auto">
      <MotionBox variants={opacityChangeVariant}>
        {animation && animation.position === 'top' && <AnimationComponent />}
        {paragraphs.map((paragraph) => (
          <Paragraph {...paragraph} />
        ))}
        {animation && animation.position === 'bottom' && <AnimationComponent />}
      </MotionBox>
    </Box>
  )
}

export default Page
