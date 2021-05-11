import { Box } from '@chakra-ui/layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HomeIcon = () => {
  const router = useRouter()
  return (
    <Box position="absolute" p={10} zIndex="1000">
      <Link href="/">
        <a aria-label="Logo">
          <img
            src="/crown.svg"
            alt="home"
            style={{ height: '30px', width: '30px' }}
          />
        </a>
      </Link>
    </Box>
  )
}

export default HomeIcon
