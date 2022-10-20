import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Box, Button, Center, Grid, GridItem, Heading, HStack, SimpleGrid, Tag, Text, Image } from '@chakra-ui/react'
import Nav from '../components/Nav'
import {Twitter, TwitterWM} from '../components/Twitter'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import CardComponent, { ITcard } from '../components/Card'

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query MyQuery {
      posts(where: {space: {id_eq: "7218"}}) {
        id
        createdAtTime
        image
        title
        downvotesCount
        summary
        tagsOriginal
        ownedByAccount {
          id
          profileSpace {
            name
          }
        }
      }
    }
    `
  });

  return {
    props: {
      posts: data.posts
    }
  }
}

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <Head>
        <title>Polkadot Arena blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='dal mondo Polkadot e Kusama in italiano: News, aggiornamenti, alpha, rumors e traduzioni' />
        <meta itemProp="name" content='Polkadot Arena blog' />
        <meta itemProp="description" content='dal mondo Polkadot e Kusama in italiano: News, aggiornamenti, alpha, rumors e traduzioni' />
        <meta itemProp="image" content='' />
        <script async src="https://platform.twitter.com/widgets.js" />
      </Head>
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
            <Heading as='h2' fontSize='l' pb={6}>Gli ultimi post</Heading>
            <Box p={4}>
                <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
                    {posts.slice(-6).reverse().map((post: JSX.IntrinsicAttributes & ITcard) => 
                      <CardComponent {...post} />                       
                    )}
                </SimpleGrid>
            </Box>
            <Center py={6}>
              <Button colorScheme='teal' variant='solid'>
                <Link href="/news">
                  <a>
                  <h2>Leggi tutti gli articoli</h2>
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
          <GridItem colSpan={{base: 12, md: 6}} borderTop='1px' borderColor='gray.200' pt={6}>
          </GridItem>
          <GridItem colSpan={{base: 6, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Spotlight on</Heading>
              <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' />
          </GridItem>
          <GridItem colSpan={{base: 6, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Spotlight on</Heading>
            <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' />
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
      <Footer />
    </>
  )
}


export default Home
