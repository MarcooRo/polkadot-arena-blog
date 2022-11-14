import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { Box, Button, Center, Grid, GridItem, Heading, HStack, SimpleGrid, Tag, Text, Image, useColorModeValue, } from '@chakra-ui/react'
import Nav from '../components/Nav'
import {SpotlightHome1, Twitter, TwitterWM} from '../components/Twitter'
import Sidebar from '../components/Sidebar'
import CardComponent, { ITcard } from '../components/CardNews'
import { ShowWMitalia, ShowOnlyPersonal, ShowWagMedia, HighPostHome } from '../components/Space'
import HeadSEO from '../components/HeadSEOPage'
import { CollectionsTag } from '../components/Alltags'


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data: wmitalia } = await client.query({
    query: gql`
      ${ShowWMitalia()}
    `
  });

  const { data: onlyPersonal } = await client.query({
    query: gql`
      ${ShowOnlyPersonal()}
    `
  });

  const { data: wagmedia } = await client.query({
    query: gql`
      ${ShowWagMedia()}
    `
  });

  const { data:highPost } = await client.query({
    query: gql`
      ${HighPostHome()}
    `
  })

  return {
    props: {
      wmitalia: wmitalia.posts,
      onlyPersonal: onlyPersonal.posts,
      wagMedia: wagmedia.posts,
      highPostHome: highPost.postById
    }
  }
}


function Home({wmitalia, onlyPersonal, wagMedia, highPostHome}: InferGetStaticPropsType<typeof getServerSideProps>) {
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
        imagePage={'poster.png'} 
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
            <Heading as='h2' fontSize='l' pb={6}>Le news di Polkadot in italiano</Heading>
            <Box>
                <SimpleGrid columns={{base: 1, md: 2}} spacing={6}>
                {(wmitalia as ITcard[]).slice(0, 6).map((post) => 
                  <CardComponent {...post} key={post.id}/>                       
                )}
                </SimpleGrid>
            </Box>
            <Center py={6}>
              <Button colorScheme='teal' variant='solid'>
                <Link href="/news">
                  <a>Tutti gli articoli</a>
                </Link>
              </Button>
            </Center>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Box pb={6}>
              <CollectionsTag />
            </Box>
            <Box borderTop='1px' borderColor='gray.200' p={6} bg={useColorModeValue('gray.100', 'gray.900')}>
              <Heading as='h2' fontSize='l' pb={6}>In evidenza</Heading> 
              <CardComponent {...highPostHome as ITcard} key={(highPostHome as ITcard).id}/>
            </Box>
            <Sidebar />
          </GridItem>

        </Grid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Dall&apos;ecosistema Dotsama</Heading>
              <Box>
                  <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
                    {(onlyPersonal as ITcard[]).slice(0, 6).map((post) => 
                      <CardComponent {...post} key={post.id}/>                       
                    )}
                  </SimpleGrid>
              </Box>
              <Center py={6}>
                <Button colorScheme='teal' variant='solid'>
                  <Link href="/news">
                    <a>Tutti gli articoli del blog</a>
                  </Link>
                </Button>
              </Center>
          </GridItem>
          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Spotlight on</Heading>
              {SpotlightHome1()}
            <Heading as='h2' fontSize='l' py={6}>Spotlight on</Heading>
              <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' alt='adv'/>
          </GridItem>
        </Grid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
          <Box mb={6}>
            <Heading as='h2' mb={6}>English content</Heading>
            <Heading as='h3' fontSize='xl' mb={3}>WagMedia Weekly News</Heading>
            <Text>News you need to know to stay on top of significant DotSama developments. Courtesy of WagMedia and Polka Häus</Text>
            <Box pt={6}>
                  <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
                      {(wagMedia as ITcard[]).slice(0, 6).map((post) => 
                        <CardComponent {...post} key={post.id}/>                       
                      )}
                  </SimpleGrid>
              </Box>
          </Box>

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

