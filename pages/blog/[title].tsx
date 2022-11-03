import type { GetServerSideProps} from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Nav from '../../components/Nav'
import { useRouter } from 'next/router';
import SingleComponent, { ITcard } from '../../components/SinglePost';
import { ArticleData } from '../../components/Space';
import HeadSEOArticle from '../../components/HeadSEOArticle';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id
  console.log('id', id)

  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query MyQuery {
      postById(id: "${id}") {
        ${ArticleData()}
      }
    }
    `
  });

  return {
    props: {
      posts: data.postById
    }
  }
}

const Post: React.FC<ITcard> = (props) => {
    let router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    return(
      <>
        <HeadSEOArticle {...props} />
        <Nav />
        <SingleComponent {...props}/>                     
      </>
  )
}


export default Post