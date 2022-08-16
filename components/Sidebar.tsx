import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdFavorite,
  MdPlaylistAdd,
} from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import { usePlaylist } from 'lib/hooks'

export const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

export const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
]

const Sidebar = () => {
  const { playlists } = usePlaylist()
  return (
    <Box
      bg="black"
      paddingX="5px"
      color="gray"
      width="100%"
      height="calc(100vh - 100px)"
    >
      <Box overflow="hidden" paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image
            src="/images/logo.svg"
            alt="Logo Image"
            width={120}
            height={60}
          />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem key={menu.name} paddingX="20px" fontSize="16px">
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem key={menu.name} paddingX="20px" fontSize="16px">
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.400" marginY="20px" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists?.map((playlist) => (
              <ListItem key={playlist.id} paddingX="20px">
                <LinkBox>
                  <Link
                    href={{
                      pathname: '/playlist/[id]',
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
