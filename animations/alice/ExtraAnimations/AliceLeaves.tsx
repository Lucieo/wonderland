import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const fallingLeaveVariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 180,
    rotate: 180,
    opacity: [0, 0.9, 1],
    transition: {
      ease: 'easeInOut',
      repeat: Infinity,
      duration: 5,
    },
  },
}

const AliceLeaves = () => {
  return (
    <Center p={10} flexDirection="column">
      <motion.div variants={fallingLeaveVariant} animate="visible">
        <Image src="/alice/leave1.png" maxH="200px" width="50px" />
      </motion.div>
      <motion.div variants={fallingLeaveVariant} animate="visible">
        <Image
          src="/alice/leave2.png"
          maxH="200px"
          width="50px"
          marginRight="100px"
        />
      </motion.div>
      <Image src="/alice/aliceLeaves.png" maxH="200px" />
    </Center>
  )
}

export default AliceLeaves
