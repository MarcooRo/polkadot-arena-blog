import type { InferGetStaticPropsType, NextPage } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {
  Box,
  SimpleGrid,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Link,
  Tag,
  HStack,
} from '@chakra-ui/react';
import Head from 'next/head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router';
import { title } from 'process';
import SingleComponent from '../../components/SinglePost';

export async function getStaticPaths() {
  return {
    paths: [{ params: { title } }],
    fallback: true,
  }
}

export async function getStaticProps(context: { params: any; }) {
  const { params } = context
  const idpost = params.title
  let output = idpost.split(('&')).pop()
  let id = output.replace(/\D/g, "")
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
    query MyQuery {
      postById(id: "${id}") {
        canonical
        createdAtTime
        downvotesCount
        image
        title
        tagsOriginal
        ownedByAccount {
          id
          profileSpace {
            name
            about
          }
        }
        body
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

function Post(this: any, { posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    let router = useRouter()

    if (router.isFallback) {
      return <div>Loading...</div>
    }

    return(
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
          <SingleComponent  {...this.posts}/>    
          <Footer />
      </>
  )
}


export default Post