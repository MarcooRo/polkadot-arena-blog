import { Box, Button, Center, Grid, GridItem, Heading, HStack, SimpleGrid, Tag, Text, Image } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from "../components/Nav";

export default function about(){
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
        <main>
        <SimpleGrid px={30} py={20}>
          <Box>
            <Heading as='h1' size='4xl'>Polkadot Arena</Heading>
              <Box pt={3}>
                <Text>Coming Soon</Text>
              </Box>
          </Box>
        </SimpleGrid>
        </main>
        </>
    )
}