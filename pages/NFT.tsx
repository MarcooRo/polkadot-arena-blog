import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Nav from '../components/Nav'
import { SimpleGrid, Heading, Box, Text, Grid, GridItem, Image } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import CardComponent, { ITcard } from '../components/CardBlog';
import { useRouter } from 'next/router';
import { AllSapces, SpaceData } from '../components/Space';
import { getStaticProps } from '.';
import HeadSEO from '../components/HeadSEOPage';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: {tagsOriginal_contains: "NFT", AND: {space: ${AllSapces()}}, hidden_eq: false}) {
          ${SpaceData()}    
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


function Page({ posts }: InferGetStaticPropsType<typeof getStaticProps>)  {
  let router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <HeadSEO 
        imagePage={'orizzontale.png'} 
        titlePage={''} 
        summaryPage={''} 
      />
      <Nav />
      <main>
        <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size={{base: '2xl', md: '4xl'}}>NFT</Heading>
            <Text>Page in working in progres</Text>
          </Box>
        </SimpleGrid>

        <Grid
         h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(12, 1fr)'
          gap={4} p={30}
        >
          <GridItem colSpan={{base: 12, md: 3}} rowSpan={{base: 1, md: 2}} borderTop='1px' borderColor='gray.200' pt={6}>
              <Box pb={6}>
                <Heading as='h2' fontSize='l' pb={6}>Progetti NFT in Dotsama</Heading>
                <Text>Coming soon</Text>            
              </Box>
          </GridItem>
          <GridItem colSpan={{base: 12, md: 6}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>About NFT on Dotsama</Heading>
            <Text>Coming soon</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus nam odio cupiditate quam maiores optio deleniti! Quisquam id sapiente cumque non expedita asperiores, voluptatibus itaque reiciendis, illo, repellendus similique.</Text>
          </GridItem>
          <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
            <Heading as='h2' fontSize='l' pb={6}>Highlight</Heading>
            <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' alt='adv'/>
          </GridItem>
          <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
          <Heading as='h2' fontSize='l' pb={6}>Tutte le news</Heading>
          <SimpleGrid columns={{base: 1, md: 3}} spacing={6}>
            {posts &&
              posts.map((post: JSX.IntrinsicAttributes & ITcard) => 
              <CardComponent {...post} key={post.id}/>                       
            )}
          </SimpleGrid>
          </GridItem>
        </Grid>
      </main>
    </>
  )
}

export default Page