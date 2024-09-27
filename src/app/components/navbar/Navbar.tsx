import { Flex, Stack, Text } from "@chakra-ui/react"
import { Facebook, Instagram, MapPinned } from "lucide-react"

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      w={'100%'}
      borderWidth={'thin'}
      borderColor={'red'}
      spacing={0}
      minH={'60px'}
      px={'2rem'}
    >
      <Flex
        borderColor={'blue'}
        borderWidth={'thin'}
        w={'100%'}
        flexGrow={1}
        justifyContent={'space-between'}
      >
        <Flex
          align={'center'}
          gap={'10px'}
        >
          <MapPinned />
          <Text>
            Honduras 2010
          </Text>
        </Flex>
        <Flex
          align={'center'}
          gap={'10px'}
        >
          <Facebook />
          <Instagram />
        </Flex>
      </Flex>
      <Flex
        borderColor={'green'}
        borderWidth={'thin'}
        w={'100%'}
        flexGrow={1}
      >
      </Flex>
    </Stack>
  )
}

