import type { InferGetStaticPropsType } from 'next'
import Nav from '../../components/Nav'
import { Box, Grid, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import CardComponent, { ITcard } from '../../components/CardNews'
import { GetStaticProps } from 'next'
import {ShowOnlyPersonal, SpaceData, ShowAllSapces, HighPostHome} from '../../components/Space';
import HeadSEO from '../../components/HeadSEOPage';
import { CollectionsTag } from '../../components/Alltags';
import { Twitter } from '../../components/Twitter';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data:spaces } = await client.query({
    query: gql`
      ${ShowAllSapces()}   
    `
  });

  const { data:highPost } = await client.query({
    query: gql`
      ${HighPostHome()}
    `
  })

  return {
    props: {
      spaces: spaces.posts,
      highPostHome: highPost.postById
    }
  }

}

function AllPost(props: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <>
      <HeadSEO 
        titlePage={'Articoli di Polkadot Arena'} 
        imagePage={'orizzontale.png'} 
        summaryPage={'Qui trovi tutte le news dal team di Polkadot Arena.'} 
      />
      <Nav />
      <main>
        <SimpleGrid px={30} py={20}>
            <Box>
              <Heading as='h1' size={{base: '2xl', md: '4xl'}}>Articoli di Polkadot Arena</Heading>
                <Box pt={3}>
                  <Text>
                    Qui trovi tutte le news dal team di Polkadot Arena. 
                  </Text>
                  <Text>
                    Se sei interessanto ad un argomento in particolare controlla la sidebare, sicuramente troverei quello che cerchi
                  </Text>
                </Box>
            </Box>
        </SimpleGrid>

        <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
        
          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
              <Heading as='h2' fontSize='l' pb={6}>Tutte le news</Heading>
              <Box p={4}>
                  <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
                    {props.spaces.map((post: JSX.IntrinsicAttributes & ITcard) => 
                      <CardComponent {...post} key={post.id}/>                       
                  )}
                </SimpleGrid>
              </Box>
          </GridItem>

          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Box pb={6}>
                  <CollectionsTag />
              </Box>
              <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
                <Heading as='h2' fontSize='l' pb={6}>In evidenza</Heading> 
                <CardComponent {...props.highPostHome} key={props.highPostHome?.id}/>
            </Box>
            <Sidebar />
            <Twitter />
          </GridItem>
          
        </Grid>
      </main>
    </>
  )
}

export default AllPost