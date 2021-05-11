import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const BoucingBunny = () => {
  return (
    <Center p={10}>
      <motion.div
        initial={{ y: '-5vh' }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          repeat: Infinity,
          duration: 2,
          bounce: 0.7,
          repeatType: 'reverse',
        }}
      >
        <Image src="/alice/bunny.png" maxH="200px" />
      </motion.div>
    </Center>
  )
}

export default BoucingBunny
