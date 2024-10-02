import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
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
          gap={8}
          alignItems={'center'}
          maxW={'80%'}
          w={'100%'}
          textAlign={'center'}
        >
          <Heading
            as={'h2'}
            textShadow={'xl'}
            fontWeight={'600'}
            textTransform={'uppercase'}
            fontSize={{ base: 'sm', md: 'xl' }}
            letterSpacing={4}
            color={'red.600'}
          >
            Bienvenidos se parte junto con nosotros
          </Heading>
          <Heading
            color={'white'}
            fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }}
          >
            Iglesia Cristiana en Barrio Nuevo
          </Heading>
          <Text
            maxW={{ base: '75%', md: '40%' }}
            w={'100%'}
            color={'white'}
          >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.
          </Text>
          <Box>
            <Button
              colorScheme={'red'}
              size={{ base: 'md', md: 'lg' }}
              rounded={'full'}
            >
              Visitanos
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>

  )
}

