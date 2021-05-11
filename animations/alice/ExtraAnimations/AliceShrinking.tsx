import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const shrinkingVariant = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 0.3,
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
}

const AliceShrinking = () => {
  return (
    <Center p={10}>
      {/* @ts-ignore */}
      <motion.div variants={shrinkingVariant} animate="visible">
        <Image src="/alice/shrinkingAlice.png" maxH="200px" />
      </motion.div>
    </Center>
  )
}

export default AliceShrinking
