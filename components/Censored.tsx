import { Box, Circle, Text, Image } from '@chakra-ui/react'
import { Iparagraph } from 'data/types'
import { gold } from 'data/usefullData'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const MotionBox = motion.custom(Box)

const Censored = ({ content }: Iparagraph) => {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (ref?.current) {
      setHeight(ref.current.offsetHeight)
    }
  }, [ref])

  return (
    <Box>
      <MotionBox
        p={4}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        bg="white"
        borderRadius="lg"
        border="4px solid"
        borderColor={gold}
        style={{
          cursor: 'grab',
        }}
        position="absolute"
        whileTap={{ cursor: 'grabbing' }}
        width="100%"
        minH={height}
      >
        <Circle>
          <Image src="/shocked.png" height="80px" draggable="false" />
        </Circle>
        <Box p={6} color={gold}>
          <Text fontSize="35px" fontFamily="Satisfy">
            Attention
          </Text>
          <Text maxW="500px" margin="0 auto">
            Le texte original contient des passages à ne pas mettre sous les
            yeux de tous les conteurs... Déplacez ce bloc si vous l'osez !
          </Text>
        </Box>
      </MotionBox>
      <Box ref={ref}>
        <Text paddingY={2} textAlign="left">
          {content}
        </Text>
      </Box>
    </Box>
  )
}

export default Censored
