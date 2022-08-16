import GradientLayout from '@/components/GradientLayout'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { useMe } from 'lib/hooks'
import prisma from 'lib/prisma'

export default function Home({ artists }) {
  const { user, isLoading, isError } = useMe()
  return (
    <GradientLayout
      image="/images/me.jpg"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      roundImage
      color="purple"
    >
      <Box paddingX="40px" color="white">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex gap="4" flexWrap="wrap">
          {artists?.map((artist, i) => (
            <Box key={i} width="20%">
              <Box
                bg="gray.900"
                minHeight="200px"
                width="100%"
                borderRadius="4px"
                padding="15px"
              >
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Flex justifyContent="center" flexDir="column">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})

  return {
    props: {
      artists,
    },
  }
}
