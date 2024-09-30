import { Flex, VStack } from "@chakra-ui/react"
import { Church } from "lucide-react"
import { DesktopNavbar } from "./DesktopNavbar"

export const Navbar = () => {
  return (
    <VStack
      as={'header'}
      w={'100%'}
      borderWidth={'thin'}
      borderColor={'red'}
      spacing={0}
      minH={'40px'}
      align={'center'}
      justify={'center'}
    >
      <Flex
        as={'nav'}
        maxW={'1440px'}
        w={'100%'}
        borderWidth={'thin'}
        borderColor={'blue'}
        flexGrow={1}
        px={'2rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex>
          <Church />
        </Flex>

        <DesktopNavbar />
      </Flex>
    </VStack>
  )
}

