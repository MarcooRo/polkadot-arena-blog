import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Box, Heading, SimpleGrid, Text, ListItem, UnorderedList, Grid, GridItem } from '@chakra-ui/react'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import HeadSEO from '../components/HeadSEOPage';
import Nav from "../components/Nav";
import { TeamToShow } from '../components/Space';
import CardTeam, { ITteam } from '../components/Team';
import { Twitter } from '../components/Twitter';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://squid.subsquid.io/subsocial/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      ${TeamToShow()}   
    `
  });

  return {
    props: {
      accounts: data.accounts
    }
  }
}

function About({ accounts }: InferGetStaticPropsType<typeof getStaticProps>){
    return(
      <>
        <HeadSEO 
          imagePage={'orizzontale.png'} 
          titlePage={'Polkadot Arena'} 
          summaryPage={'Polkadot Arena è un progetto in lingua italiana di divulgazione su Dotsama, attraverso l&apos;aggregazione in un unico canale di tutti i contenuti realizzati dai membri del collettivo.'} 
        />
        <Nav />
        <main>
          <SimpleGrid px={30} py={20}>
            <Box>
              <Heading as='h1' size='4xl'>Polkadot Arena</Heading>
                <Box pt={3}>
                  <Text>Working Progress</Text>
                </Box>
            </Box>
          </SimpleGrid>
          <Grid templateColumns='repeat(12, 1fr)' gap={4} p={30}>
            <GridItem colSpan={{base: 12, md: 9}} borderTop='1px' borderColor='gray.200' pt={6}>
            <article>
                <Box maxW={{base: '100%', md: '870px'}} p={6}>

                  <Heading as='h2' fontSize='xl' pb={6}>Manifesto provisorio</Heading>
                  <Text>
                    Polkadot Arena è un progetto in lingua italiana di divulgazione su Dotsama, attraverso l&apos;aggregazione in un unico canale di tutti i contenuti realizzati dai membri del collettivo. 
                  </Text>
                  <br />
                  <Heading as='h3' fontSize='l' pb={6}>L&apos;unione fa la forza!</Heading>
                  <Text>
                    Il progetto è stato lanciato dei membri italiani di WM, rendendoci conto di produrre una notevole quantità di contenuti abbiamo pensato che unendo le forze e parlando con una unica voce avremmo potuto dare più risalto e poter portare un&apos;informazione più completa alla community italiana.
                    L&apos;obbiettivo è diventare il canale d&apos;informazione più popolare in italiano. Attraverso il merito dei propri contenuti.
                  </Text>
                  <br />
                  <Text>
                    Al momento il collettivo gestisce:
                  </Text>
                    <UnorderedList>
                      <ListItem>Canale Twitter: <a href="https://twitter.com/PolkadotArena">@PolkadotArena</a></ListItem>
                      <ListItem>Blog: questo</ListItem>
                    </UnorderedList>
                    <br />

                  <Text>
                    Ci piacerebbe aggiungere anche Instagram e youtube, ma al memento non siamo in grado di garantire un continuo flusso di contenuti.
                    Il nostro feed sarà composto prevalentemente da contenuti originali in italiano e traduzioni di altri blog. Ma verrà dato spazio anche ampio spazio a contenuti in inglese.
                    Non poniamo nessun tipo di vincolo al tipo di contenuto che veicoleremo, solo la maggioranza dovrà essere fatta in italiano.
                  </Text>
                  <br />
                  <Heading as='h3' fontSize='l' pb={6}>Dare spazio a tutti</Heading>
                  <Text>
                    Siamo un collettivo e ci esprimiamo attraverso un brand, ma questo non vuol dire che le nostre singolarità spariranno. Anzi, daremo spazio alle individualità attraverso la pubblicazioni dei contenuti firmati dai loro autori.
                    Nello specifico tutti i contenuti in inglese verranno solo riproposti sui canali di Polkadto Arena dai canali dei singoli autori. Questi contenuti potranno essere tradotti e veicolati successivamente come Polkado Arena.
                    I contenti in italiano verranno in grande parte proposti come Polkadto Arena, ma possono essere riproposti dai canali personali. 
                    <br /><br />
                    Non vogliamo porre una regola precisa, ogni persona del collettivo può fare come preferisce, basta che contribuisca, come può e con il tempo che ha, a far crescere il canale e il brand, al fine di far conoscere l’ecosistema Polkadto e Kusama. 
                  </Text>
                  <br />
                  <Heading as='h3' fontSize='l' pb={6}>Tutti invitati</Heading>
                  <Text>
                    Per raggiungere i nostri obbiettivi il collettivo, si amplierà con lo scopo di portare più know how possibile. L&apos;ecosistema Dotsama è molto vasto, ma ci sono moti utenti attivi che per passione o lavoro seguono i vari progetti.
                    Il nostro invito è verso: tutte queste persone attive, membri del team e ambassador. 
                    <br />
                    Siete i ben venuti! 
                  </Text>          
                </Box>
            </article>

            </GridItem>
            <GridItem colSpan={{base: 12, md: 3}} borderTop='1px' borderColor='gray.200' pt={6}>
              <Twitter />
            </GridItem>
          </Grid>

          <Box borderTop='1px' borderColor='gray.200' p={30}>
            <Heading as='h2' fontSize='xl' pb={6}>Il team</Heading>
            <SimpleGrid columns={{base: 1, md: 4}} spacing={6}>
              {accounts.map((profile: JSX.IntrinsicAttributes & ITteam) => 
                <CardTeam {...profile} key={profile.profileSpace?.id}/>                       
              )}
            </SimpleGrid>
          </Box>
        </main>
      </>
    )
}

export default About