import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <Flex
      w={'100%'}
      h={'100dvh'}
    >
      <Image
        src={'/hero-imagen.jpg'}
        alt={'Imagen de la iglesia'}
        fill={true}
        objectFit={'cover'}
        objectPosition={'center'}
        style={{
          filter: 'brightness(40%)'
        }}
      />
    </Flex>

  )
}

