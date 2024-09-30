'use client'

import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react"
import { navItem } from "./nav-item"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const DesktopNavbar = () => {
  const pathname = usePathname()

  return (
    <UnorderedList
      styleType={'none'}
      display={'flex'}
      alignItems={'center'}
      gap={'15px'}
    >
      {
        navItem.map((item) => (
          <ListItem key={item.label}>
            <Box
              as={Link}
              href={item.to}
              _hover={{
                color: 'red.500'
              }}
              color={pathname === item.to ? 'red.500' : 'black'}
              textTransform={'uppercase'}
            >
              {item.label}
            </Box>
          </ListItem>
        ))
      }
      <ListItem>
        <Button
          size={'sm'}
          rounded={'full'}
          colorScheme={'red'}
          textTransform={'uppercase'}
        >
          Soy nuevo
        </Button>
      </ListItem>
    </UnorderedList>
  )
}

