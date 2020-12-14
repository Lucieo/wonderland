import { Center, Image } from '@chakra-ui/react'
import React from 'react'

const KeyOnDoor = () => {
  return (
    <Center p={12} flexDirection="column">
      <Image src="/alice/porte.png" maxH="200px" />
      <Image src="/alice/cle.png" maxH="100px" />
    </Center>
  )
}

export default KeyOnDoor
