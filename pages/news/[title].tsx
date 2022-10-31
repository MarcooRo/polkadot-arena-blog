import type { GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router';
import SingleComponent, { ITcard } from '../../components/SinglePost';
import { ArticleData } from '../../components/Space';
import SEO from '../../components/SEO';
import ipfsContect from '../../components/ipfsURL';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id

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
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{props.posts.title}</title>
            <meta name="description" content={props.posts.summary} />
            <meta itemProp="name" content={props.posts.title} />
            <meta itemProp="description" content={props.posts.summary} />
            <meta itemProp="image" content={ipfsContect.ipfsURL+props.posts.image} />
            <meta property="og:title" content={props.posts.title} />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content="" /> */}
            <meta property="og:image" content={ipfsContect.ipfsURL+props.posts.image} />
          </Head>
          <Nav />
            <SingleComponent {...props}/>                     
          <Footer />
      </>
  )
}


export default Post