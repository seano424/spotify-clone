import { Box } from '@chakra-ui/layout'
import Sidebar from './Sidebar'

export const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        border="2px solid black"
        position="absolute"
        top="0"
        left="0"
        width="250px"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box border="2px solid black" position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  )
}
