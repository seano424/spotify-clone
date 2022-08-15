import { Box } from '@chakra-ui/layout'
import Sidebar from './Sidebar'

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        top="0"
        left="0"
        width="250px"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box
        height="100px"
        border="2px solid black"
        position="absolute"
        left="0"
        bottom="0"
      >
        Player
      </Box>
    </Box>
  )
}
