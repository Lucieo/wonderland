import { Center } from '@chakra-ui/react'
import { gold } from 'data/usefullData'
import { motion} from 'framer-motion'
import React from 'react'

const pantoufleVariants = {
  initial:{
    pathLength: 0,
  },
  animate: {
    stroke: gold,
    pathLength: 1,
    transition: { duration: 2 },
  },
  hover: { scale: 1.15, strokeWidth: 20 },
  pressed:{ fill: gold }
}

const PantoufleSvg = () =>
  <Center cursor="pointer">
    <motion.svg
      height="150"
      width="150"
      viewBox="1 -52 511.99905 511"
      animate="animate"
      initial="initial"
      whileHover="hover"
      whileTap="pressed"
    >
      <motion.path
        d="m83.53443,213.53755c1.69938,8.36176 4.58344,16.22896 8.57455,23.38304c12.99121,23.29966 19.08714,47.56258 19.08714,69.5453l0,90.86664c0,4.06299 3.29526,7.36112 7.36112,7.36112l29.44734,0c4.06299,0 7.36112,-3.29813 7.36112,-7.36112l0,-82.1282c0,-16.59414 3.82433,-33.24867 11.06756,-48.18656l0.67285,-1.08403c34.85603,29.01315 62.75926,65.99413 80.97515,107.40903c18.21589,41.4149 26.94858,31.35087 47.31817,31.35087l60.203,0c29.06778,0 51.91312,-0.60096 68.92132,-3.52816c8.44515,-1.45497 34.14292,-5.87452 34.14292,-25.91917c0,-11.33497 -9.39117,-27.79397 -23.9265,-41.92961c-9.75923,-9.49757 -30.31284,-26.03995 -58.2707,-30.15182c-2.17383,-0.31917 -4.37354,0.34793 -6.00391,1.81728c-7.29786,6.58762 -21.60027,11.36947 -34.00203,11.36947c-17.6293,0 -36.29662,-10.06402 -43.41908,-23.40892c-0.1409,-0.26167 -0.29617,-0.5147 -0.46583,-0.75912l-49.1412,-70.11175c-30.41349,-43.38745 -66.72161,-82.28347 -107.91224,-115.60403c-2.68565,-2.17383 -6.51861,-2.1882 -9.21864,-0.0345c-11.49025,9.15826 -21.07695,20.11367 -28.49557,32.56143c-14.30817,24.01852 -18.91462,51.40704 -14.32255,74.3214c0.01438,0.07476 0.02875,0.14952 0.04601,0.22141z"
        fill="transparent"
        strokeWidth="10"
        stroke="#ddd"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pantoufleVariants}
      />
    </motion.svg>
  </Center>


export default PantoufleSvg
