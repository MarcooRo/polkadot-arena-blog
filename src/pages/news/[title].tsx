import type { GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Nav from '../../components/Nav'
import { useRouter } from 'next/router';
import SingleComponent, { ITpost } from '../../components/SinglePost';
import { AllSapces, ArticleData, SpaceData } from '../../components/Space';
import HeadSEOArticle from '../../components/HeadSEOArticle';
import { SimpleGrid, Box } from '@chakra-ui/react';
import CardComponent, { ITcard } from '../../components/CardNews';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id
  const cat = query.cat

  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data:posts } = await client.query({
    query: gql`
    query MyQuery {
      postById(id: "${id}") {
        ${ArticleData()}
      }
    }
    `
  });

  const { data:morepost } = await client.query({
    query: gql`
      query MyQuery {
        posts(where: {tagsOriginal_contains: "${cat}", AND: {space: ${AllSapces()}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
          ${SpaceData()}    
        }
      }
    `
  });

  return {
    props: {
      posts: posts.postById,
      morepost: morepost.posts,
    }
  }
}

function Post({posts, morepost}:ITpost) {
    let router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    return(
      <>
        <HeadSEOArticle {...posts} />
        <Nav />
        <SingleComponent {...posts}/> 
        <SimpleGrid px={30} py={20}>
          <Box>
            <SimpleGrid columns={{base: 1, md: 4}} spacing={6}>
              {(morepost as unknown as ITpost[]).slice(0, 4).map((post) => 
                <CardComponent {...post} key={post.id}/>                       
              )}
            </SimpleGrid>
          </Box>      
        </SimpleGrid>              
      </>
  )
}


export default Post