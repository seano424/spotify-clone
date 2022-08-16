import prisma from 'lib/prisma'
import { validateToken } from 'lib/auth'
import GradientLayout from '@/components/GradientLayout'
import SongsTable from '@/components/SongsTable'

const getBGColor = (id) => {
  const colors = ['red', 'green', 'blue', 'purple', 'orange', 'teal', 'yellow']

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)]
}

const Playlist = ({ playlist }) => {
  const color = getBGColor(playlist.id)
  return (
    <GradientLayout
      color={color}
      image={`https://picsum.photos/id/${playlist.id * 40}/200/300`}
      subtitle="playlist"
      title={playlist.name}
      description={`${playlist.songs.length} songs`}
      roundImage={false}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  )
}

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN)
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  })

  return {
    props: { playlist },
  }
}

export default Playlist
