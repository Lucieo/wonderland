import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const keyVariant = {
  hidden: {
    y: '50px',
    opacity: 0,
    rotate: 0,
  },
  visible: {
    y: '-100px',
    opacity: 1,
    rotate: 180,
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
}

const KeyOnDoor = () => {
  return (
    <Center p={12} flexDirection="column">
      <Image src="/alice/porte.png" maxH="200px" />
      {/* @ts-ignore */}
      <motion.div variants={keyVariant} animate="visible" initial="hidden">
        <Image src="/alice/cle.png" maxH="100px" />
      </motion.div>
    </Center>
  )
}

export default KeyOnDoor
