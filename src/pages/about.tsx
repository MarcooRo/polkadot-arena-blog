import {
   Box,
   Heading,
   SimpleGrid,
   Text,
   ListItem,
   UnorderedList,
   Grid,
   GridItem,
} from '@chakra-ui/react'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import HeadSEO from '../components/seo/HeadSEOPage'
import Nav from '../components/navigation/Nav'
import CardTeam, { ITteam } from '../components/info/Team'
import { aboutPageQuery } from '../graphql/query/about'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data } = await aboutPageQuery()

   return {
      props: {
         accounts: data.accounts,
      },
   }
}

function About({
   accounts,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
   return (
      <>
         <HeadSEO
            imagePage={'poster.png'}
            titlePage={'Polkadot Arena'}
            summaryPage={
               'Polkadot Arena è un progetto in lingua italiana di divulgazione sull&aposecosistema Polkadot e Kusama, attraverso l&apos;aggregazione in un unico canale di tutti i contenuti realizzati dai membri del collettivo.'
            }
         />
         <Nav />
         <SimpleGrid px={30} py={20}>
            <Box>
               <Heading as="h1" size="4xl">
                  Polkadot Arena
               </Heading>
            </Box>
         </SimpleGrid>

         <Grid templateColumns="repeat(12, 1fr)" p={30}>
            <GridItem
               colSpan={{ base: 12, md: 7 }}
               borderTop="1px"
               borderColor="gray.200"
               py={6}
               px={3}
            >
               <Heading as="h2" fontSize="xl" pb={6}>
                  La nostra missione
               </Heading>
               <Text>
                  Polkadot Arena è un progetto che fa parte dell&apos;Italian Polkadot Ecosystem Hub, si occupa di divulgazione sull&apos;ecosistema di Polkadot e Kusama in lingua italiana e basato su una piattaforma di blogging decentralizzata.
                  Vogliamo diventare il punto di riferimento italiano per tutto ciò che riguarda Polkadot e Kusama
               </Text>
               <br />
               <Text>
                  A tal fine, Polkadot Arena aggrega in un unico blog articoli originali, guide, tutorial e le traduzioni dei contenuti più importanti dell&apos;ecosistema.
               </Text>
               <br />
               <Heading as="h2" fontSize="xl" pb={6}>
                  Una base solida
               </Heading>
               <Text>
                  Polkadot Arena nasce dalla volontà di alcuni membri italiani della comunità Polkadot di porre rimedio alla frammentazione dei canali di informazione italiana riguardo all&apos;ecosistema. Creando un canale unico, l&apos;idea è quella di rendere Polkadot più avvicinabile per l&apos;utente medio e attrarre più partecipanti al network.
               </Text>
               <br />
               <Text>
                  Il team fondatore di Polkadot Arena è formato da esperti in vari campi, dallo sviluppo informatico, alle traduzioni, al marketing. Questa natura eterogenea ci permette di produrre contenuti utili e piacevoli da fruire.
               </Text>
               <br />
               <Text>Al momento puoi seguire Polkadot Arena su:</Text>
               <UnorderedList>
                  <ListItem>
                     Canale Twitter:{' '}
                     <a
                        href="https://twitter.com/PolkadotArena"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        @PolkadotArena
                     </a>
                  </ListItem>
                  <ListItem>Blog: questo</ListItem>
               </UnorderedList>
               <br />

               <Heading as="h2" fontSize="xl" pb={6}>
                  Partecipare a Polkadot Arena
               </Heading>
               <Text>
                  In questo momento il modo migliore per sostenere Polkadot Arena è seguirci su Twitter e retwittare i nostri thread.
               </Text>
               <br />
               <Text>
                  Chiunque può inviare un articolo originale o una traduzione perché venga pubblicata a discrezione della redazione. Al momento non possiamo garantire alcun tipo di retribuzione, poiché il progetto è alle battute iniziali. Prossimamente abbiamo in programma di proporre dei Tip su Polkadot e Kusama per contenuti di valore provenienti da fuori redazione e in futuro potremmo indire un bounty on-chain.
               </Text>
            </GridItem>
            <GridItem
               colSpan={{ base: 12, md: 5 }}
               borderTop="1px"
               borderColor="gray.200"
               p={6}
            >
               <Box>
                  <Heading as="h2" fontSize="xl" pb={6}>
                     Come è costruito il blog
                  </Heading>
                  <Text>
                  A Polkadot Arena passiamo dalle parole ai fatti. Il nostro blog è costruito su tecnologie web3 e stiamo lavorando alla creazione di una piattaforma di blogging decentralizzata.
                  Ogni articolo è registrato sul protocollo <b>IPFS</b> tramite il sistema
                  di{' '}
                     <a
                        href="https://polkaverse.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Polkaverse
                     </a>
                     ,un progetto di Subsocial su parachain di Polkadot{' '}
                     <a
                        href="https://subsocial.network/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Subsocial
                     </a>
                     .
                  </Text>
                  <br />
                  <Text>
                     Per leggere i dati usiamo le chiamate GraphQl di Subsquid, un altro progetto decentralizzato che si occupa di connettere il mondo blockchain e la renderizzazione di dati on-screen.
                     Per leggere i dati usiamo le chiamate{' '}
                     <b>
                        GraphQl di{' '}
                        <a
                           href="https://subsquid.io/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Subsquid
                        </a>
                     </b>
                     , un altro progetto decentralizzato che si occupa di connettere il mondo blockchain e la renderizzazione di dati on-screen.
                  </Text>
                  <br />
                  <Text>
                     Il blog è alla sua prima versione e vuole garantire una buona SEO e il corretto recuperaro di articoli conservati on-chain. In questo momento stiamo lavorato alla v2.0, che prevede un backoffice con il quale si potrà registrare articoli su protocollo IPFS direttamente dal blog e ulteriori miglioramenti di performance e SEO.
                  </Text>
               </Box>
               
            </GridItem>
         </Grid>

         {/* <Box borderTop="1px" borderColor="gray.200" p={30}>
            <Heading as="h2" fontSize="xl" pb={6}>
               Il team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 4 }}>
               {accounts &&
                  (accounts as ITteam[]).map((profile) => (
                     <CardTeam {...profile} key={profile.profileSpace?.id} />
                  ))}
            </SimpleGrid>
         </Box> */}
      </>
   )
}

export default About
