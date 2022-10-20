import type { InferGetStaticPropsType, NextPage } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import ipfsContect from '../../components/setting'
import styles from '../../styles/Post.module.css'
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
import { ReactElement, JSXElementConstructor, ReactFragment, useState } from 'react';
import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown';
var urlCate = '../category/'

const [state, setstate] = useState([] as any[]);

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



function Post({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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
          {posts.downvotesCount <= 3 &&
          <article className={styles.article}>
              <Center mt={10}>
                  <Box maxW={{base: '100%', md: '870px'}} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                      <Box h={'350px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                          <Image
                          boxSize='870px'
                          h={'350px'}
                          objectFit='cover'
                          src={ipfsContect.ipfsURL+posts.image}
                          layout={'fill'}
                          alt='image'
                          />
                      </Box>
                      <HStack px={{base: 1, md: 6}}>
                      {posts.tagsOriginal.split(",").map((tag: any) => (
                          <Link href={urlCate+tag} key={posts.id}>
                              <a><Tag size='sm' variant='solid'>{tag}</Tag></a>
                          </Link>
                      ))}
                      </HStack>
                      <Stack px={{base: 1, md: 6}} py={{base: 4, md: 0}}>
                          <header>
                              <Heading as='h1'>{posts.title}</Heading>
                          </header>
                          <section>
                            <ReactMarkdown>{posts.body}</ReactMarkdown>
                          </section>
                      </Stack>
                  </Box>
              </Center>
          </article>
          }
          <Footer />
      </>
  )
}


export default Post