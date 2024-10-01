import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <Flex
      w={'100%'}
      h={'100dvh'}
    >
      <Box>
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
        <Flex
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          flexDirection={'column'}
          borderWidth={'thin'}
          gap={8}
          alignItems={'center'}

          textAlign={'center'}
        >
          <Heading
            as={'h2'}
            textShadow={'xl'}
            fontWeight={'600'}
            textTransform={'uppercase'}
            fontSize={'xl'}
            letterSpacing={4}
            color={'red.600'}
          >
            Bienvenidos se parte junto con nosotros
          </Heading>
          <Heading
            color={'white'}
            fontSize={'7xl'}
          >
            Iglesia Cristiana en Barrio Nuevo
          </Heading>
          <Text
            maxW={'50%'}
            w={'100%'}
            color={'white'}
          >
            voluptatibus a libero optio sit dolores iure enim? Perferendis voluptatum quaerat sint ad voluptates, vitae, dolor doloremque odio nihil tempore eum.
          </Text>
        </Flex>
      </Box>
    </Flex>

  )
}

