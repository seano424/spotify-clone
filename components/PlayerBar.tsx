import { Flex, Box, Text } from '@chakra-ui/layout'
import Player from './Player'

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box width="30%" padding="20px" color="white">
          <Text fontSize="large">Song Name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box width="40%">
          <Player />
        </Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar
