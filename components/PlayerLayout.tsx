import Head from 'next/head'
import { Box } from '@chakra-ui/layout'
import Sidebar from './Sidebar'
import PlayerBar from './PlayerBar'

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Head>
        <title>My Spotify Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box position="absolute" top="0" left="0" width="250px">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box height="100px" width="100vw" position="absolute" left="0" bottom="0">
        <PlayerBar />
      </Box>
    </Box>
  )
}
