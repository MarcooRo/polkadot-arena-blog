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
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import HeadSEO from '../components/HeadSEOPage'
import { devPageQuery } from '../graphql/query/area-dev'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data } = await devPageQuery()

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
            imagePage={'orizzontale.png'}
            titlePage={'Area per developer e sviluppatori'}
            summaryPage={
               'Area per developer e sviluppatori interessati alla blockchain, rust, substrate, Polkadot e Kusama'
            }
         />
         <Nav />
         <main>
            <SimpleGrid px={30} py={20}>
               <Box>
                  <Heading as="h1" size={{ base: '2xl', md: '4xl' }}>
                     Area-Dev
                  </Heading>
                  <Text>
                     Page in working in progres, here you will find: tutorial,
                     repository and article for your developer thirst
                  </Text>
               </Box>
            </SimpleGrid>

            <Grid
               h="200px"
               templateRows="repeat(2, 1fr)"
               templateColumns="repeat(12, 1fr)"
               gap={{ base: 3, md: 4, lg: 6 }}
               p={30}
            >
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  rowSpan={{ base: 1, md: 2 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Box pb={6}>
                     <Heading as="h2" fontSize="l" pb={6}>
                        Repository Ufficiali Polkadot
                     </Heading>
                     <Text>Coming soon</Text>
                     <Heading as="h2" fontSize="l" mt={6} pb={6}>
                        Repository Ufficiali Kusama
                     </Heading>
                     <Text>Coming soon</Text>
                     <Heading as="h2" fontSize="l" mt={6} pb={6}>
                        Repository Ufficiali Substrate
                     </Heading>
                     <Text>Coming soon</Text>
                  </Box>
               </GridItem>
               <GridItem
                  colSpan={{ base: 12, md: 6 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Tutorial on Polkadot
                  </Heading>
                  <Text>Coming soon</Text>
                  <Text>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Distinctio minus nam odio cupiditate quam maiores optio
                     deleniti! Quisquam id sapiente cumque non expedita
                     asperiores, voluptatibus itaque reiciendis, illo,
                     repellendus similique.
                  </Text>
               </GridItem>
               <GridItem
                  colSpan={{ base: 12, md: 3 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Image
                     boxSize="350px"
                     objectFit="cover"
                     src="/adv_placeholder.jpg"
                     alt="adv"
                  />
               </GridItem>
               <GridItem
                  colSpan={{ base: 12, md: 9 }}
                  borderTop="1px"
                  borderColor="gray.200"
                  pt={6}
               >
                  <Heading as="h2" fontSize="l" pb={6}>
                     Repository you need to know
                  </Heading>
                  <Text>Coming soon</Text>
                  <Heading as="h2" fontSize="l" mt={6} pb={6}>
                     Tutorial you need to know
                  </Heading>
                  <Text>Coming soon</Text>
               </GridItem>
            </Grid>
         </main>
      </>
   )
}

export default Page
