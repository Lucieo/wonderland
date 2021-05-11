import { Center } from '@chakra-ui/react'
import { gold } from 'data/usefullData'
import { motion } from 'framer-motion'
import React from 'react'

const lapinVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    stroke: gold,
    pathLength: 1,
    transition: { duration: 2 },
  },
  hover: { scale: 1.15, strokeWidth: 20 },
  pressed: { fill: gold },
}

const LapinSvg = () => (
  <Center cursor="pointer">
    <motion.svg
      height="120"
      width="120"
      overflow="visible"
      viewBox="1 -52 511.99905 511"
      animate="animate"
      initial="initial"
      whileHover="hover"
      whileTap="pressed"
    >
      <motion.path
        d="M 427.34 174.123 C 460.269 126.33 481.492 67.341 477.987 9.397 C 477.802 6.334 476.221 3.526 473.698 1.779 C 471.177 0.032 467.993 -0.46 465.058 0.445 C 409.612 17.547 361.832 58.195 328.701 105.835 C 310.216 132.37 295.36 162.776 286.269 195.562 C 276.427 193.207 266.256 192.001 256.006 192.001 C 245.752 192.001 235.613 193.199 225.742 195.556 C 216.676 162.864 201.852 132.452 183.316 105.841 C 150.178 58.194 102.403 17.548 46.954 0.445 C 44.021 -0.459 40.836 0.031 38.314 1.779 C 35.791 3.526 34.21 6.334 34.024 9.397 C 30.475 68.107 51.57 126.076 84.668 174.12 C 102.939 200.671 125.759 224.719 151.938 244.11 C 132.965 269.421 124.161 300.492 126.33 330.726 C 100.275 350.551 86.006 375.682 86.006 402 C 86.006 432.286 104.318 460.41 137.567 481.191 C 169.355 501.059 211.417 512 256.006 512 C 300.595 512 342.657 501.059 374.444 481.191 C 407.694 460.41 426.006 432.286 426.006 402 C 426.006 375.681 411.736 350.551 385.682 330.725 C 387.815 301.089 379.337 269.817 360.078 244.107 C 386.185 224.769 409.025 200.74 427.34 174.123 Z"
        fill="transparent"
        strokeWidth="10"
        stroke="#ddd"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={lapinVariants}
      />
    </motion.svg>
  </Center>
)

export default LapinSvg
