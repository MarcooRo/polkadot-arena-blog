import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Nav from '../components/navigation/Nav'
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
import CardComponent, { ITcard } from '../components/cards/CardNews'
import { useRouter } from 'next/router'
import { TwitterPolkadot } from '../components/socials/Twitter'
import HeadSEO from '../components/seo/HeadSEOPage'
import { polkadotPageQuery } from '../graphql/query/polkadot'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data } = await polkadotPageQuery()

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
            titlePage={'Polkadot'}
            summaryPage={
               'Polkadot consentirà un Web completamente decentralizzato in cui gli utenti hanno il controllo. Polkadot è costruito per connettere private and consortium chains, networks pubbliche e senza permissionless, oracles e tecnologie future che devono ancora essere create. '
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Polkadot
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
                              href="https://polkadot.network/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Website
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://polkadot.network/Polkadot-lightpaper.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Lightpaper
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://polkadot.network/PolkaDotPaper.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              PolkaDotPaper
                           </a>
                        </ListItem>
                        <ListItem>
                           <a
                              href="https://wiki.polkadot.network/"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Wiki
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
                              href="https://twitter.com/Polkadot"
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
                     About Polkadot
                  </Heading>
                  <Text>
                     Polkadot consentirà un Web completamente decentralizzato in
                     cui gli utenti hanno il controllo.
                     <br />
                     <br />
                     Polkadot è costruito per connettere private and consortium
                     chains, networks pubbliche e senza permissionless, oracles
                     e tecnologie future che devono ancora essere create.
                     Polkadot facilita un Internet in cui blockchain
                     indipendenti possono scambiare informazioni e transazioni
                     in modo affidabile tramite la relay chain di Polkadot.
                     <br />
                     <br />
                     Polkadot rende più facile che mai creare e connettere
                     applicazioni, servizi e istituzioni decentralizzate.
                     Autorizzando gli innovatori a costruire soluzioni migliori,
                     cerchiamo di liberare la società dalla sua dipendenza da
                     una rete rotta in cui le sue grandi istituzioni non possono
                     violare la nostra fiducia.
                  </Text>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <a
                     href="https://wiki.polkadot.network/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        boxSize="350px"
                        objectFit="cover"
                        src="/wiki-polkadot.jpg"
                        alt="wiki polkadot"
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
                  <TwitterPolkadot />
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default Page
