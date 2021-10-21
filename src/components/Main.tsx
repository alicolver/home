import { Box, Button, Container, Heading, Icon, Image, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react"
import mugshot from '../img/mugshot.png'
import { BioSection, BioYear } from "./Bio"
import Paragraph from "./Paragraph"
import Section from "./Section"
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub
  } from 'react-icons/io5'

function Main() {
    return(
        <Container padding="20px">
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hey, stranger :) I'm Ali, a backend developer based in Scotland!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        ALI COLVER
                    </Heading>
                    <p>Software Development Engineer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0}}
                    ml={{ md: 6}}
                    textAlign="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src={mugshot}
                        alt="mugshot"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Ali is a backend engineer based in Edinburgh with a
                    passion for building digital services that delight users. He enjoys all
                    parts of the devlopment cycle, from planning and designing all the
                    way to deploying and cloud ops. When not online, he loves
                    hanging out with his friends. Currently, he is working for a small company
                    based that's headerquartered in Seattle (not Microsoft ;)).
                </Paragraph>
            </Section>

            <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Edinburgh, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed Internship @ Scott Logic
        </BioSection>
        <BioSection>
            <BioYear>2020</BioYear>
            Graduated from Imperial College London with joint honours in Mathematics 📈 and Computer Science 💻
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Amazon Development Centre Scotland.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
            Music, Tennis, Football, Playing Guitar, N'golo Kante, Machine Learning 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/alicolver" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @alicolver
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/alicolver" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @alicolver
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/alicolver" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @alicolver
              </Button>
            </Link>
          </ListItem>
        </List>
        </Section>

        </Container>
    )
}

export default Main