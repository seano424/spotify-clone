import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from '@chakra-ui/react'
import ReactHowler from 'react-howler'
import { useEffect, useRef, useState } from 'react'
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from 'react-icons/md'
import { useStoreActions } from 'easy-peasy'

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center>
        <ButtonGroup>
          <IconButton
            fontSize="24px"
            aria-label="shuffle"
            outline="none"
            variant="link"
            color="gray.600"
            icon={<MdShuffle />}
          />
          <IconButton
            fontSize="24px"
            aria-label="previous"
            outline="none"
            variant="link"
            color="gray.600"
            icon={<MdSkipPrevious />}
          />
          <IconButton
            fontSize="40px"
            aria-label="play"
            outline="none"
            variant="link"
            color="white"
            icon={<MdOutlinePlayCircleFilled />}
          />
          <IconButton
            fontSize="40px"
            aria-label="pause"
            outline="none"
            variant="link"
            color="white"
            icon={<MdOutlinePauseCircleFilled />}
          />
          <IconButton
            fontSize="24px"
            aria-label="next"
            outline="none"
            variant="link"
            color="gray.600"
            icon={<MdSkipNext />}
          />
          <IconButton
            fontSize="24px"
            aria-label="repeat"
            outline="none"
            variant="link"
            color="gray.600"
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={['min', 'max']}
              step={0.1}
              min={0}
              max={300}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%">
            <Text fontSize="xs" textAlign="right">
              3:21
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Player
