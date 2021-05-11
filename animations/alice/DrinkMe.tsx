import { Button, Center, Image, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const bottleVariant = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: ['-30px', '100px'],
    opacity: 0,
    transition: {
      duration: 1,
      when: 'afterChildren',
      staggerChildren: 0.8,
    },
  },
}

const foodVariant = {
  visible: {
    opacity: 0,
    y: -50,
    position: 'absolute',
  },
  exit: (xDirection) => ({
    opacity: [1, 0],
    y: -200,
    x: xDirection,
    rotate: 360,
    transition: {
      duration: 2,
    },
  }),
}

const DrinkMe = () => {
  const [isPotionEmpty, setPotionEmpty] = useState(false)
  const [disabledBtn, setDisabledBtn] = useState(false)
  return (
    <Center p={12} flexDirection="column">
      <Box height="100px">
        <AnimatePresence onExitComplete={() => setDisabledBtn(false)}>
          {!isPotionEmpty && (
            <motion.div
              variants={bottleVariant}
              animate="visible"
              initial="hidden"
              exit="exit"
            >
              {/* @ts-ignore */}
              <motion.div variants={foodVariant} initial={false} custom={-50}>
                <Image src="/alice/candy.png" h="80px" />
              </motion.div>
              {/* @ts-ignore */}
              <motion.div variants={foodVariant} initial={false} custom={100}>
                <Image src="/alice/pineapple.png" h="80px" />
              </motion.div>
              {/* @ts-ignore */}
              <motion.div variants={foodVariant} initial={false} custom={-100}>
                <Image src="/alice/dinde.png" h="80px" />
              </motion.div>
              {/* @ts-ignore */}
              <motion.div variants={foodVariant} initial={false} custom={50}>
                <Image src="/alice/cake-slice.png" h="80px" />
              </motion.div>
              <Image src="/alice/potion.png" h="100px" />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      <Box p={4}>
        <Button
          onClick={() => {
            if (!isPotionEmpty) setDisabledBtn(true)
            setPotionEmpty(!isPotionEmpty)
          }}
          disabled={disabledBtn}
        >
          {isPotionEmpty ? 'Encore !' : 'Buvez Moi'}
        </Button>
      </Box>
    </Center>
  )
}

export default DrinkMe
