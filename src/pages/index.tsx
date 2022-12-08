import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import {
   Box,
   Button,
   Center,
   Grid,
   GridItem,
   Heading,
   SimpleGrid,
   Text,
   useColorModeValue,
} from '@chakra-ui/react'
import Nav from '../components/Nav'
import { SpotlightHome1, Twitter, TwitterWM } from '../components/Twitter'
import Sidebar from '../components/Sidebar'
import CardComponent, { ITcard } from '../components/CardNews'
import {
   HighPostHome,
   ShowOtherSpace,
   ShowDotleap,
   ShowKusamarian,
} from '../components/Space'
import HeadSEO from '../components/HeadSEOPage'
import { CollectionsTag } from '../components/Alltags'
import CardComponentVideo, { ITcardVideo } from '../components/CardVideo'
import { graphqlQuery } from '../graphql/query/query'
import {
   personalQuery,
   wagMediaItalyQuery,
   wagMediaQuery,
} from '../graphql/query/main'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data: wmitalia } = await wagMediaItalyQuery()

   const { data: onlyPersonal } = await personalQuery()

   const { data: wagmedia } = await wagMediaQuery()

   const { data: highPost } = await graphqlQuery({
      query: gql`
         ${HighPostHome()}
      `,
   })

   const { data: otherPost } = await graphqlQuery({
      query: gql`
         ${ShowOtherSpace()}
      `,
   })

   const { data: kusamarian } = await graphqlQuery({
      query: gql`
         ${ShowKusamarian()}
      `,
   })

   const { data: dotleap } = await graphqlQuery({
      query: gql`
         ${ShowDotleap()}
      `,
   })

   return {
      props: {
         wmitalia: wmitalia.posts,
         onlyPersonal: onlyPersonal.posts,
         wagMedia: wagmedia.posts,
         highPostHome: highPost.postById,
         otherPost: otherPost.posts,
         kusamarian: kusamarian.posts,
         dotleap: dotleap.posts,
      },
   }
}

function Home({
   wmitalia,
   onlyPersonal,
   wagMedia,
   highPostHome,
   otherPost,
   kusamarian,
   dotleap,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
   let router = useRouter()

   if (router.isFallback) {
      ;<div>
         <Box p={4}>
            <SimpleGrid columns={2} spacing={6}>
               <Text>Loding...</Text>
            </SimpleGrid>
         </Box>
      </div>
   

   return (
      <>
         <HeadSEO
            titlePage={'Polkadot Arena, benvenuti!'}
            imagePage={'poster.png'}
            summaryPage={
               'Dal mondo Polkadot e Kusama un blog in italiano con news, aggiornamenti, alpha, rumors e traduzioni'
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Benvenuto in
                     <br />
                     Polkadot Arena
                  </Heading>
                  <Box pt={3}>
                     <Text>
                        Dal mondo Polkadot e Kusama un blog in italiano e
                        inglese con news, aggiornamenti, alpha, rumors, video e
                        traduzioni
                     </Text>
                  </Box>
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
                  display={{ base: 'none', md: 'inline-block' }}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Da Twitter
                  </Heading>
                  <Box rounded={'md'}>
                     <Twitter />
                  </Box>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 6 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Le news di Polkadot in italiano
                  </Heading>
                  <Box>
                     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        {(wmitalia as ITcard[]).slice(0, 6).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                     </SimpleGrid>
                  </Box>
                  <Center py={6}>
                     <Button colorScheme="teal" variant="solid">
                        <Link href="/news">
                           <a>Tutti gli articoli</a>
                        </Link>
                     </Button>
                  </Center>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box pb={6}>
                     <CollectionsTag />
                  </Box>
                  <Box
                     borderTop="1px"
                     borderColor="gray.200"
                     p={6}
                     bg={useColorModeValue('gray.100', 'gray.900')}
                  >
                     <Heading as="h2" fontSize="l" pb={6}>
                        In evidenza
                     </Heading>
                     <CardComponent
                        {...(highPostHome as ITcard)}
                        key={(highPostHome as ITcard).id}
                     />
                  </Box>
                  <Sidebar />
               </GridItem>
            </Grid>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} p={30}>
               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     I progetti dell&apos;ecosistema Polkadot e Kusama dal team
                     Polkadot Arena
                  </Heading>
                  <Box>
                     <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {(onlyPersonal as ITcard[]).slice(0, 6).map((post) => (
                           <CardComponent {...post} key={post.id} />
                        ))}
                     </SimpleGrid>
                  </Box>
                  <Center py={6}>
                     <Button colorScheme="teal" variant="solid">
                        <Link href="/news">
                           <a>Tutti gli articoli del blog</a>
                        </Link>
                     </Button>
                  </Center>
               </GridItem>
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Spotlight on
                  </Heading>
                  {SpotlightHome1()}
               </GridItem>
            </Grid>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} p={30}>
               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box mb={6}>
                     <Heading as="h2" mb={6}>
                        English content
                     </Heading>
                     <Heading as="h3" fontSize="xl" mb={3}>
                        WagMedia Weekly News
                     </Heading>
                     <Text>
                        News you need to know to stay on top of significant
                        DotSama developments. Courtesy of WagMedia and Polka
                        Häus
                     </Text>
                     <Box pt={6}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                           {(wagMedia as ITcard[]).slice(0, 6).map((post) => (
                              <CardComponent {...post} key={post.id} />
                           ))}
                        </SimpleGrid>
                     </Box>
                  </Box>
               </GridItem>

               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
                  display={{ base: 'none', md: 'inline-block' }}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     From WagMedia
                  </Heading>
                  <TwitterWM />
               </GridItem>
            </Grid>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} p={30}>
               <GridItem
                  colSpan={{ base: 12, md: 12 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box mb={6}>
                     <Heading as="h2" mb={6}>
                        Video from Kusamarian
                     </Heading>
                     <Text>
                        Kusamarian videos: The story of Polkadot/Kusama. Order
                        in the Chaos
                     </Text>
                     <Box pt={6}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                           {(kusamarian as ITcardVideo[])
                              .slice(0, 3)
                              .map((post) => (
                                 <CardComponentVideo {...post} key={post.id} />
                              ))}
                        </SimpleGrid>
                     </Box>
                  </Box>
               </GridItem>
            </Grid>

            <Grid templateColumns="repeat(12, 1fr)" gap={4} p={30}>
               <GridItem
                  colSpan={{ base: 12, md: 12 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box mb={6}>
                     <Heading as="h2" mb={6}>
                        The last Dotleap
                     </Heading>
                     <Text>
                        A fortnightly-ish newsletter about all things Web 3.0
                        from the Polkadot side
                     </Text>
                     <Box pt={6}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                           {(dotleap as ITcard[]).slice(0, 3).map((post) => (
                              <CardComponent {...post} key={post.id} />
                           ))}
                        </SimpleGrid>
                     </Box>
                  </Box>
               </GridItem>
            </Grid>

            {/* <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
          <GridItem colSpan={{base: 12, md: 12}} borderTop='1px' borderColor='gray.200' pt={6}>
          <Box mb={6}>
            <Heading as='h2' mb={6}>From the officle Paraverce</Heading>
            <Text>Officle projects channel on Paraverse</Text>
            <Box pt={6}>
                  <SimpleGrid columns={{base: 1, md: 4}} spacing={6}>
                      {(otherPost as ITcard[]).slice(0, 12).map((post) => 
                        <CardComponent {...post} key={post.id}/>                       
                      )}
                  </SimpleGrid>
              </Box>
          </Box>

          </GridItem>
        </Grid> */}
         </main>
      </>
   )
}

export default Home
