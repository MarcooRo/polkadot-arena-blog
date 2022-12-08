import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Nav from '../components/Nav'
import {
   SimpleGrid,
   Heading,
   Box,
   Text,
   Grid,
   GridItem,
   Image,
   ListItem,
   UnorderedList,
} from '@chakra-ui/react'
import { gql } from '@apollo/client'
import CardComponent, { ITcard } from '../components/CardNews'
import { useRouter } from 'next/router'
import { ShowKusamaFeed } from '../components/Space'
import { TwitterKusama } from '../components/Twitter'
import HeadSEO from '../components/HeadSEOPage'
import { GraphqlConnect } from '../graphql/GraphqlConnect'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const client = GraphqlConnect.getInstance().getSubsocialGraphql()

   const { data } = await client.query({
      query: gql`
         ${ShowKusamaFeed()}
      `,
   })

   return {
      props: {
         posts: data.posts,
      },
   }
}

function Page({ posts }: InferGetStaticPropsType<typeof getServerSideProps>) {
   let router = useRouter()

   if (router.isFallback) {
      return <div>Loading...</div>
   }
   return (
      <>
         <HeadSEO
            imagePage={'poster.png'}
            titlePage={'Kusama'}
            summaryPage={
               'Kusama è canary network di Polkadot; una versione di Polkadot che è disponibile per prima e ha un valore economico reale. Per gli sviluppatori, Kusama è un banco di prova per aggiornamenti di runtime, on-chain governance e parachain.'
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Kusama
                  </Heading>
               </Box>
            </SimpleGrid>

            <Grid
               templateColumns="repeat(12, 1fr)"
               gap={{ base: 3, md: 4, lg: 6 }}
               p={30}
            >
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box pb={6}>
                     <Heading as="h2" fontSize="l" pb={6}>
                        Link Ufficiali
                     </Heading>
                     <UnorderedList>
                        <ListItem>
                           <a
                              href="https://kusama.network/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Website
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://guide.kusama.network/docs/kusama-getting-started"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Guide
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://github.com/paritytech/polkadot"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              GitHub
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://substrate.io/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Substrate
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://twitter.com/kusamanetwork"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Twitter
                           </a>
                        </ListItem>
                     </UnorderedList>
                  </Box>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 6 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     About Kusama
                  </Heading>
                  <Text>
                     Kusama è canary network di Polkadot; una versione di
                     Polkadot che è disponibile per prima e ha un valore
                     economico reale. Per gli sviluppatori, Kusama è un banco di
                     prova per aggiornamenti di runtime, on-chain governance e
                     parachain.
                     <br />
                     <br />
                     Kusama è di proprietà di coloro che detengono i token
                     Kusama - KSM. Non esiste un kill switch centrale e tutte le
                     modifiche vengono apportate tramite la governance on-chain
                     del protocollo. La rete è senza autorizzazione e chiunque
                     può venire e iniziare a usarla. Kusama è sperimentale.
                     Expect Chaos.
                     <br />
                     <br />
                     Puoi interagire con tutte le funzionalità della rete Kusama
                     come staking, governance, aste parachain, trasferimenti di
                     base e tutto il resto.
                  </Text>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <a
                     href="https://guide.kusama.network/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        boxSize="350px"
                        objectFit="cover"
                        src="/guida-kusama.jpg"
                        alt="guida kusama"
                        rounded={6}
                     />
                  </a>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Tutte le news
                  </Heading>
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                     {posts &&
                        (posts as ITcard[]).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                  </SimpleGrid>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <TwitterKusama />
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default Page
