import type { GetServerSideProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
import Nav from '../components/navigation/Nav'
import {
   SpotlightHome1,
   Twitter,
} from '../components/socials/Twitter'
import Sidebar from '../components/Sidebar'
import CardComponent, { ITcard } from '../components/cards/CardNews'
import HeadSEO from '../components/seo/HeadSEOPage'
import CardComponentVideo, { ITcardVideo } from '../components/cards/CardVideo'
import {
   dotLeapQuery,
   highPostQuery,
   kusamarianQuery,
   personalQuery,
   wagMediaItalyQuery,
} from '../graphql/query/main'
import { Tags } from '../components/tags'
import { collectionsTag } from '../components/tags/tags'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data: wmitalia } = await wagMediaItalyQuery()
   const { data: onlyPersonal } = await personalQuery()
   const { data: highPost } = await highPostQuery()
   const { data: kusamarian } = await kusamarianQuery()
   const { data: dotleap } = await dotLeapQuery()

   return {
      props: {
         wmitalia: wmitalia.posts,
         onlyPersonal: onlyPersonal.posts,
         highPostHome: highPost.postById,
         kusamarian: kusamarian.posts,
         dotleap: dotleap.posts,
      },
   }
}

function Home({
   wmitalia,
   onlyPersonal,
   highPostHome,
   kusamarian,
   dotleap,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
   let router = useRouter()

   const backgroundBox = useColorModeValue('gray.100', 'gray.900')

   if (router.isFallback) {
      return (
         <div>
            <Box p={4}>
               <SimpleGrid columns={2} spacing={6}>
                  <Text>Loding...</Text>
               </SimpleGrid>
            </Box>
         </div>
      )
   }
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
                        Dal mondo Polkadot e Kusama un blog in italiano con news, aggiornamenti, alpha, rumors, video e traduzioni
                     </Text>
                  </Box>
               </Box>
            </SimpleGrid>

            <Grid
               templateColumns="repeat(12, 1fr)"
               gap={{ base: 3, md: 4, lg: 6 }}
               p={30}
            >
               {/* <GridItem
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
               </GridItem> */}

               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Le news di Polkadot in italiano
                  </Heading>
                  <Box>
                     <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6}>
                        {(wmitalia as ITcard[]).slice(0, 9).map((post) => (
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
                     <Tags
                        text={'Raccolte di articoli'}
                        projects={collectionsTag}
                     />
                  </Box>
                  <Box
                     borderTop="1px"
                     borderColor="gray.200"
                     p={6}
                     bg={backgroundBox}
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
                        {(onlyPersonal as ITcard[]).slice(0, 9).map((post) => (
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
                     Seguici su Twitter
                  </Heading>
                  <Twitter />
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
