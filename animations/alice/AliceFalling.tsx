import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const fallingVariant = {
  visible: {
    rotate: [-100, 100, -10, 120, 80, 360],
    transition: {
      ease: 'easeInOut',
      duration: 5,
      repeat: 3,
      repeatType: 'reverse',
    },
  },
}

const AliceFalling = () => {
  return (
    <Center p={10}>
      {/* @ts-ignore */}
      <motion.div variants={fallingVariant} animate="visible">
        <Image src="/alice/aliceFalling.png" maxH="200px" />
      </motion.div>
    </Center>
  )
}

export default AliceFalling
