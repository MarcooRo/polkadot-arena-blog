import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Tag,
  HStack,
} from '@chakra-ui/react';
import ipfsContect from './setting';
import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Post.module.css'
var urlCate = '../category/'

export interface ITcard {
    id: string;
    createdAtTime:number;
    image: string;
    title: string;
    downvotesCount: number;
    summary: string;
    tagsOriginal: string;
    body: string
}

const SingleComponent: React.FC<ITcard> = props => {
    return(
        <>
        {props.downvotesCount <= 3 &&
          <article className={styles.article}>
              <Center mt={10}>
                  <Box maxW={{base: '100%', md: '870px'}} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                      <Box h={'400px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                          <Image
                          src={ipfsContect.ipfsURL+props.image}
                          layout={'fill'}
                          alt='image'
                          />
                      </Box>
                      <HStack px={{base: 1, md: 6}}>
                      {props.tagsOriginal.split(",").map((tag: any) => (
                          <Link href={urlCate+tag} key={props.id}>
                              <a><Tag size='sm' variant='solid'>{tag}</Tag></a>
                          </Link>
                      ))}
                      </HStack>
                      <Stack px={{base: 1, md: 6}} py={{base: 4, md: 0}}>
                          <header>
                              <Heading as='h1'>{props.title}</Heading>
                          </header>
                          <section>
                            <ReactMarkdown>{props.body}</ReactMarkdown>
                          </section>
                      </Stack>
                  </Box>
              </Center>
          </article>
          }
        </>
  )
}

export default SingleComponent;

