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
import HeadSEO from '../components/HeadSEOPage'
import Nav from '../components/Nav'
import CardTeam, { ITteam } from '../components/Team'
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
               'Polkadot Arena è un progetto in lingua italiana di divulgazione su Dotsama, attraverso l&apos;aggregazione in un unico canale di tutti i contenuti realizzati dai membri del collettivo.'
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
                  La nostra mission
               </Heading>
               <Text>
                  Polkadot Arena è un progetto in lingua italiana di
                  divulgazione sul&apos;ecosistema di Polkadot and Kusama, attraverso l&apos;aggregazione in un
                  unico canale di tutti i contenuti realizzati dai membri del
                  collettivo.
               </Text>
               <br />
               <Heading as="h3" fontSize="l" pb={6}>
                  L&apos;unione fa la forza!
               </Heading>
               <Text>
                  Il progetto è stato lanciato dei membri italiani di WM,
                  rendendoci conto di produrre una notevole quantità di
                  contenuti abbiamo pensato che unendo le forze e parlando con
                  una unica voce avremmo potuto dare più risalto e poter portare
                  un&apos;informazione più completa alla community italiana.
                  L&apos;obbiettivo è diventare il canale d&apos;informazione
                  più popolare in italiano. Attraverso il merito dei propri
                  contenuti.
               </Text>
               <br />
               <Text>Al momento il collettivo gestisce:</Text>
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

               <Text>
                  Ci piacerebbe aggiungere anche Instagram e youtube, ma al
                  memento non siamo in grado di garantire un continuo flusso di
                  contenuti. Il nostro feed sarà composto prevalentemente da
                  contenuti originali in italiano e traduzioni di altri blog. Ma
                  verrà dato spazio anche ampio spazio a contenuti in inglese.
                  Non poniamo nessun tipo di vincolo al tipo di contenuto che
                  veicoleremo, solo la maggioranza dovrà essere fatta in
                  italiano.
               </Text>
               <br />
               <Heading as="h3" fontSize="l" pb={6}>
                  Dare spazio a tutti
               </Heading>
               <Text>
                  Siamo un collettivo e ci esprimiamo attraverso un brand, ma
                  questo non vuol dire che le nostre singolarità spariranno.
                  Anzi, daremo spazio alle individualità attraverso la
                  pubblicazioni dei contenuti firmati dai loro autori. Nello
                  specifico tutti i contenuti in inglese verranno solo
                  riproposti sui canali di Polkadot Arena dai canali dei singoli
                  autori. Questi contenuti potranno essere tradotti e veicolati
                  successivamente come Polkado Arena. I contenti in italiano
                  verranno in grande parte proposti come Polkadot Arena, ma
                  possono essere riproposti dai canali personali.
                  <br />
                  <br />
                  Non vogliamo porre una regola precisa, ogni persona del
                  collettivo può fare come preferisce, basta che contribuisca,
                  come può e con il tempo che ha, a far crescere il canale e il
                  brand, al fine di far conoscere l’ecosistema Polkadot e
                  Kusama.
               </Text>
               <br />
               <Heading as="h3" fontSize="l" pb={6}>
                  Tutti invitati
               </Heading>
               <Text>
                  Per raggiungere i nostri obbiettivi il collettivo, si amplierà
                  con lo scopo di portare più know how possibile.
                  L&apos;ecosistema Dotsama è molto vasto, ma ci sono moti
                  utenti attivi che per passione o lavoro seguono i vari
                  progetti. Il nostro invito è verso: tutte queste persone
                  attive, membri del team e ambassador.
                  <br />
                  Siete i ben venuti!
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
                     Ogni articolo presente sul blog, e tutto il suo contenuto,
                     è registrato sul protocollo <b>IPFS</b> tramite il sistema
                     di{' '}
                     <a
                        href="https://polkaverse.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Polkaverse
                     </a>
                     , progetto della parachain di Kusama{' '}
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
                     Quello che facciamo, è leggere i dati grazie alle chiamate{' '}
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
                     . Subsquid è un progetto che si occupa di connettore il
                     mondo blockchain e la renderizzazione onscreen di dati.
                  </Text>
                  <br />
                  <Text>
                     Grazie a queste due innovative tecnologie abbiamo creato un
                     blog che vede quasi tutti i suoi contenuti sul <b>Web3</b>.
                     Di questo andiamo particolarmente fieri!
                  </Text>
                  <br />
                  <Text>
                     Il Blog è alla sua prima versione, un Blog V1, ha il suo
                     focus nel garantire una buona SEO e recuperare articoli
                     rigorosamente on-chain. In una prossima versione sarà
                     integrato un backoffice con il quale si potrà registrare
                     articoli su protocollo IPFS direttamente dal blog
                  </Text>
               </Box>
               <Box mt={6}>
                  <Heading as="h2" fontSize="xl" pb={6}>
                     How the blog is built
                  </Heading>
                  <Text>
                     Every article on the blog, and all its content, is recorded
                     on the <b>IPFS</b> protocol through the{' '}
                     <a
                        href="https://polkaverse.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Polkaverse
                     </a>{' '}
                     system, a project of Kusama{' '}
                     <a
                        href="https://subsocial.network/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Subsocial&apos;s
                     </a>{' '}
                     parachain.
                  </Text>
                  <br />
                  <Text>
                     What we do, is read the data through{' '}
                     <b>
                        GraphQl calls from{' '}
                        <a
                           href="https://subsquid.io/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           Subsquid
                        </a>
                     </b>
                     . Subsquid is a project that help the blockchain projects
                     to rendering of data onscreen.
                  </Text>
                  <br />
                  <Text>
                     Thanks to these two innovative technologies, we have
                     created a blog that sees almost all of its content on the{' '}
                     <b>Web3</b>. We are particularly proud of this!
                  </Text>
                  <br />
                  <Text>
                     The blog is in its first version, a blog V1, has its focus
                     on ensuring good SEO and retrieving strictly on-chain
                     articles. In a forthcoming version, a backoffice will be
                     integrated with which we will be able to register articles
                     on IPFS protocol directly from the blog
                  </Text>
               </Box>
            </GridItem>
         </Grid>

         <Box borderTop="1px" borderColor="gray.200" p={30}>
            <Heading as="h2" fontSize="xl" pb={6}>
               Il team
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 4 }}>
               {accounts &&
                  (accounts as ITteam[]).map((profile) => (
                     <CardTeam {...profile} key={profile.profileSpace?.id} />
                  ))}
            </SimpleGrid>
         </Box>
      </>
   )
}

export default About
