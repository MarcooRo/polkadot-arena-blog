import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Box, Button, Center, Grid, GridItem, Heading, HStack, SimpleGrid, Tag, Text, Image } from '@chakra-ui/react'
import Nav from '../components/Nav'
import {Twitter, TwitterWM} from '../components/Twitter'
import Sidebar from '../components/Sidebar'
import CardComponent, { ITcard } from '../components/CardNews'
import { WMitalia, OnlyPersonal, SpaceData } from '../components/Space'
import HeadSEO from '../components/HeadSEOPage'

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data: wmitalia } = await client.query({
    query: gql`
    query MyQuery {
      posts(where: {space: ${WMitalia()}, hidden_eq: false}) {
        ${SpaceData()}
      }
    }
    `
  });

  const { data: onlyPersonal } = await client.query({
    query: gql`
    query MyQuery {
      posts(where: {space: ${OnlyPersonal()}, hidden_eq: false}) {
        ${SpaceData()}
      }
    }
    `
  });

  return {
    props: {
      wmitalia: wmitalia.posts,
      onlyPersonal: onlyPersonal.posts
    }
  }
}

function Home(props : InferGetStaticPropsType<typeof getStaticProps>) {
  let router = useRouter()

    if (router.isFallback) {
      <div>
      <Box p={4}>
          <SimpleGrid columns={2} spacing={6}>
              <Text>Loding...</Text>
          </SimpleGrid>
      </Box>
  </div>
  }

  return (
    <>
      <HeadSEO 
        titlePage={'Polkadot Arena, benvenuti!'} 
        imagePage={'orizzontale.png'} 
        summaryPage={'Dal mondo Polkadot e Kusama un blog in italiano con news, aggiornamenti, alpha, rumors e traduzioni'} 
      />
      <Nav />
      <main>
        <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>Benvenuto in<br />Polkadot Arena</Heading>
              <Box pt={3}>
                <Text>Dal mondo Polkadot e Kusama un blog in italiano con news, aggiornamenti, alpha, rumors e traduzioni</Text>
              </Box>
          </Box>
        </SimpleGrid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>

          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6} display={{base: 'none', md: 'inline-block' }}>
            <Heading as='h2' fontSize='l' pb={6}>Da Twitter</Heading>
              <Box rounded={'md'}>
                <Twitter />
              </Box>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 6}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Dal team di Polkador Arena</Heading>
            <Box>
                <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
                    {props.onlyPersonal.slice(-6).reverse().map((post: JSX.IntrinsicAttributes & ITcard) => 
                      <CardComponent {...post} key={post.id}/>                       
                    )}
                </SimpleGrid>
            </Box>
            <Center py={6}>
              <Button colorScheme='teal' variant='solid'>
                <Link href="/news">
                  <a>
                  <h2>Tutti gli articoli</h2>
                  </a>
                </Link>
              </Button>
            </Center>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Sidebar />
          </GridItem>

        </Grid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Dal blog di Polkadot tradotto in italiano</Heading>
              <Box p={4}>
                  <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
                      {props.wmitalia.slice(-6).reverse().map((post: JSX.IntrinsicAttributes & ITcard) => 
                        <CardComponent {...post} key={post.id}/>                       
                      )}
                  </SimpleGrid>
              </Box>
              <Center py={6}>
                <Button colorScheme='teal' variant='solid'>
                  <Link href="/blog">
                    <a>
                    <h2>Tutti gli articoli del blog</h2>
                    </a>
                  </Link>
                </Button>
              </Center>
          </GridItem>
          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Spotlight on</Heading>
              <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' alt='adv'/>
            <Heading as='h2' fontSize='l' py={6}>Spotlight on</Heading>
              <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' alt='adv'/>
          </GridItem>
        </Grid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
          <Box mb={6}>
            <Heading as='h4'>English content</Heading>
            <Text w='75%'>From Wag Media and Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente voluptate nesciunt voluptates debitis dolores officia vitae, repellendus, quos ullam eaque facilis temporibus! Molestiae laboriosam a aut suscipit modi. Voluptates.</Text>
          </Box>
            <Heading as='h2' fontSize='l' pb={6}>From Youtube</Heading>
            <Text>Coming soon</Text>
          </GridItem>
          
          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6} display={{base: 'none', md: 'inline-block' }}>
            <Heading as='h2' fontSize='l' pb={6}>From WagMedia</Heading>
            <TwitterWM />
          </GridItem>
        </Grid>
      </main>
    </>
  )
}


export default Home
