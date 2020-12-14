import { Center, Image } from '@chakra-ui/react'
import React from 'react'

const AliceLeaves = () => {
  return (
    <Center p={10} flexDirection="column">
      <Image src="/alice/leave1.png" maxH="200px" width="50px" />
      <Image
        src="/alice/leave2.png"
        maxH="200px"
        width="50px"
        marginRight="100px"
      />
      <Image src="/alice/aliceLeaves.png" maxH="200px" />
    </Center>
  )
}

export default AliceLeaves
