import { Box, Card, CardBody, CardHeader, Container, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Hero } from "./components";
import { ChurchIcon, HandHeart, NotebookTabs } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container
        as={'main'}
        maxW={'1440px'}
        borderWidth={'thin'}
        borderColor={'red'}
        h={'100dvh'}
      >
        <Flex
          py={8}
        >
          <Card
            maxW={'300px'}
            w={'100%'}
            shadow={'none'}
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
        </Flex>
      </Container>
    </>
  );
}
