'use client'

import { Flex, Show, Text, VStack } from "@chakra-ui/react"
import { Church } from "lucide-react"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"
import { useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"

export const Navbar = () => {
  const [change, setChange] = useState(0)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => setChange(latest))
  console.log(change)

  return (
    <VStack
      backdropFilter={`${change >= 60 ? 'blur(8px) brightness(55%)' : ''}`}
      as={'header'}
      position={'fixed'}
      w={'100%'}
      spacing={0}
      minH={'60px'}
      align={'center'}
      justify={'center'}
      zIndex={2000}
      color={'white'}
      transition={'all 0.3s ease-out'}
    >
      <Flex
        as={'nav'}
        maxW={'1440px'}
        w={'100%'}
        flexGrow={1}
        px={'2rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex
          alignItems={'center'}
          gap={'15px'}
        >
          <Church />
          <Text
          >
            Iglesia Cristiana en Barrio Nuevo
          </Text>
        </Flex>

        <Show
          above={'lg'}
        >
          <DesktopNavbar />
        </Show>
        <Show
          below={'lg'}
        >
          <MobileNavbar />
        </Show>
      </Flex>
    </VStack>
  )
}

