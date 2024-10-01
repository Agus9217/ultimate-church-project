import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { MenuIcon } from 'lucide-react'
import { navItem } from './nav-item'


export const MobileNavbar = () => {
  return (
    <Menu
      autoSelect={false}
    >
      <MenuButton
        as={IconButton}
        variant={'ghost'}
        icon={<MenuIcon />}
        color={'white'}
        _active={{
          bg: 'none'
        }}
        _hover={{
          bg: 'none'
        }}
      />
      <MenuList>
        {
          navItem.map((item) => (
            <MenuItem
              color={'black'}
              key={item.label}
            >
              {item.label}
            </MenuItem>
          ))
        }
      </MenuList>
    </Menu>
  )
}

