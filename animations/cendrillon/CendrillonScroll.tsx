import React, { useRef } from 'react'
import {
  motion,
  useTransform,
  useSpring,
  useElementScroll,
} from 'framer-motion'
import { Text, Center, Image, Box } from '@chakra-ui/react'
import { ArrowDownIcon } from '@chakra-ui/icons'

const MotionCenter = motion.custom(Center)

const Wrapper = ({ transformStyle, children }) => {
  return (
    <MotionCenter
      position="fixed"
      height="100vh"
      width="100%"
      left={0}
      top={0}
      style={transformStyle}
    >
      {children}
    </MotionCenter>
  )
}

const Kitchen = ({ scrollYProgress }) => {
  const x = useSpring(useTransform(scrollYProgress, [0, 0.2], [-150, -1000]))
  const opacity = useTransform(scrollYProgress, [0, 0.13], [1, 0])
  return (
    <Wrapper
      transformStyle={{
        x,
        zIndex: -10,
        opacity,
      }}
    >
      <Image src="/cendrillon/kitchen.png" height="300px" />
    </Wrapper>
  )
}

const CendrillonBefore = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  return (
    <Wrapper transformStyle={{ opacity }}>
      <Image src="/cendrillon/before.png" height="300px" />
    </Wrapper>
  )
}

const Magic = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 1, 0])
  return (
    <Wrapper
      transformStyle={{
        opacity,
      }}
    >
      <Image src="/cendrillon/transformation.png" height="300px" />
    </Wrapper>
  )
}

const CendrillonAfter = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1])
  return (
    <Wrapper
      transformStyle={{
        opacity,
      }}
    >
      <Image src="/cendrillon/after.png" height="300px" />
    </Wrapper>
  )
}

const Carrosse = ({ scrollYProgress }) => {
  const x = useSpring(useTransform(scrollYProgress, [0.5, 0.6], [-400, -50]))
  const opacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1])
  return (
    <Wrapper
      transformStyle={{
        x,
        zIndex: -10,
        opacity,
      }}
    >
      <Image src="/cendrillon/carrosse.png" height="300px" />
    </Wrapper>
  )
}

const Castle = ({ scrollYProgress }) => {
  const y = useSpring(useTransform(scrollYProgress, [0.6, 0.7], [-200, -80]))
  const opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1])
  return (
    <Wrapper
      transformStyle={{
        y,
        x: 100,
        zIndex: -20,
        opacity,
      }}
    >
      <Image src="/cendrillon/castle.png" height="250px" />
    </Wrapper>
  )
}

const CendrillonScroll = () => {
  const boxRef = useRef()
  const { scrollYProgress } = useElementScroll(boxRef)

  return (
    <>
      <Box
        ref={boxRef}
        style={{
          overflow: 'auto',
          height: '55vh',
          width: '100%',
          position: 'absolute',
          zIndex: 1000,
        }}
        border="10px solid"
        borderColor="red.600"
        borderRadius={10}
        p={6}
      >
        <Text fontFamily="Satisfy" fontSize="2xl">
          Scrollez pour activer la magie
        </Text>
        <ArrowDownIcon />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '300vh',
          }}
        ></Box>
      </Box>
      <Box>
        <Kitchen scrollYProgress={scrollYProgress} />
        <CendrillonBefore scrollYProgress={scrollYProgress} />
        <CendrillonAfter scrollYProgress={scrollYProgress} />
        <Magic scrollYProgress={scrollYProgress} />
        <Carrosse scrollYProgress={scrollYProgress} />
        <Castle scrollYProgress={scrollYProgress} />
      </Box>
    </>
  )
}

export default CendrillonScroll
