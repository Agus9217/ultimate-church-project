import { Box, Button, Card, CardBody, CardHeader, Container, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Hero } from "./components";
import { ChurchIcon, HandHeart, NotebookTabs } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container
        as={'main'}
        maxW={'1440px'}
        p={0}
      >
        <Flex
          px={8}
          pt={8}
          minH={'500px'}
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '15px', lg: '0' }}
        >
          <Card
            maxW={'250px'}
            w={'100%'}
            shadow={'none'}
            bg={'none'}
          >
            <CardHeader>
              <Stack>
                <Flex
                  flexDirection={'column'}
                  gap={2}
                >
                  <ChurchIcon size={'30px'} />
                  <Heading
                    fontSize={'20px'}
                  >
                    Worship
                  </Heading>
                  <Text
                    color={'red.600'}
                  >
                    Te esperamos
                  </Text>

                </Flex>
                <Divider borderColor={'red.600'} w={'80px'} />
              </Stack>
            </CardHeader>
            <CardBody>
              <Text>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </Text>
            </CardBody>
          </Card>
          <Card
            maxW={'300px'}
            w={'100%'}
            shadow={'none'}
            bg={'none'}
          >
            <CardHeader>
              <Stack>
                <Flex
                  flexDirection={'column'}
                  gap={2}
                >
                  <NotebookTabs size={'30px'} />
                  <Heading
                    fontSize={'20px'}
                  >
                    Worship
                  </Heading>
                  <Text
                    color={'red.600'}
                  >
                    Te esperamos
                  </Text>

                </Flex>
                <Divider borderColor={'red.600'} w={'80px'} />
              </Stack>

            </CardHeader>
            <CardBody>
              <Text>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </Text>
            </CardBody>
          </Card>
          <Card
            maxW={'300px'}
            w={'100%'}
            shadow={'none'}
            bg={'none'}
          >
            <CardHeader>
              <Stack>
                <Flex
                  flexDirection={'column'}
                  gap={2}
                >
                  <HandHeart size={'30px'} />
                  <Heading
                    fontSize={'20px'}
                  >
                    Worship
                  </Heading>
                  <Text
                    color={'red.600'}
                  >
                    Te esperamos
                  </Text>

                </Flex>
                <Divider borderColor={'red.600'} w={'80px'} />
              </Stack>
            </CardHeader>
            <CardBody>
              <Text>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </Text>
            </CardBody>
          </Card>
          <Flex
            mt={{ base: '0', lg: '-70px' }}
            bg={'red.600'}
            color={'white'}
            py={8}
            px={9}
            flexDir={'column'}
            gap={9}
            justifyContent={'center'}
            zIndex={1000}
          >
            <Flex
              gap={5}
              flexDirection={'column'}
              px={9}
            >
              <Heading>
                A Christian should live for the glory of God and the well-being of others.
              </Heading>
              <Text>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={'100%'}
          minH={'500px'}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Flex
            w={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Box
              position={'relative'}
              w={'100%'}
              minH={{ base: '700px', lg: '100%' }}
            >
              <Image
                src={'/iglesia-salon.jpg'}
                fill={true}
                alt={'Salon de la iglesia'}
                objectFit={'cover'}
                objectPosition={'center'}
              />
            </Box>

          </Flex>
          <Box
            w={'100%'}
            p={'4.2rem'}
          >
            <Text
              color={'red.600'}
              letterSpacing={4}
              fontWeight={'600'}
              textTransform={'uppercase'}
              py={4}
            >
              Bienvenidos
            </Text>
            <Heading
              textTransform={'uppercase'}
            >
              Connect, Grow and Serve with Us
            </Heading>
            <Flex
              mt={8}
              flexDirection={'column'}
              gap={6}
            >
              <Text>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Text>
              <Text>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </Text>
              <Box>
                <Button
                  rounded={'full'}
                  colorScheme={'red'}
                >
                  Ver más
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex
          w={'100%'}
          bg={'red.600'}
          minH={'250px'}
          alignItems={'center'}
          p={8}
          color={'white'}
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={{ base: '3rem', lg: 0 }}
        >
          <Flex
            flexGrow={1}
            w={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            textAlign={'center'}
          >
            <Heading>
              We're on a mission to help all your problems
            </Heading>
          </Flex>
          <Flex
            w={'100%'}
            flexGrow={1}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Heading>
              1,005,000
            </Heading>
            <Text
              textTransform={'uppercase'}
              fontWeight={'600'}
              letterSpacing={3}
            >
              Members
            </Text>
          </Flex>
          <Flex
            w={'100%'}
            flexGrow={1}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Heading>
              1,005,000
            </Heading>
            <Text
              textTransform={'uppercase'}
              fontWeight={'600'}
              letterSpacing={3}
            >
              Members
            </Text>
          </Flex>
          <Flex
            w={'100%'}
            flexGrow={1}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Heading>
              1,005,000
            </Heading>
            <Text
              textTransform={'uppercase'}
              fontWeight={'600'}
              letterSpacing={3}
            >
              Members
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
