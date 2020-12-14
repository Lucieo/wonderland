import { Button, Center, Image, Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const DrinkMe = () => {
  const [isPotionEmpty, setPotionEmpty] = useState(false)
  const [disabledBtn, setDisabledBtn] = useState(false)
  return (
    <Center p={12} flexDirection="column">
      <Box height="100px">
        {!isPotionEmpty && (
          <>
            <Image src="/alice/candy.png" h="80px" />
            <Image src="/alice/pineapple.png" h="80px" />
            <Image src="/alice/dinde.png" h="80px" />
            <Image src="/alice/cake-slice.png" h="80px" />
            <Image src="/alice/potion.png" h="100px" />
          </>
        )}
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
