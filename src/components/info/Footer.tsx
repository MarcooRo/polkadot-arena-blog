import {
   Grid,
   GridItem,
   Heading,
   Text,
   Box,
   Stack,
   HStack,
} from '@chakra-ui/react'
import Script from 'next/script'
import NevItems from '../navigation/Nav-items'
import SocialLink from '../socials/SocialLink'

export default function Footer() {
   return (
      <>
         <footer>
            <Grid
               templateColumns="repeat(12, 1fr)"
               gap={4}
               py={30}
               borderTop="1px"
               borderColor="gray.200"
            >
               <GridItem colSpan={{ base: 12, md: 6 }} p={6}>
                  <GridItem>
                     <Heading as="h3" fontSize="xl" mb={3}>
                        Polkadot Arena
                     </Heading>
                     <Text>
                        Polkadot Arena è parte del progetto Italian Polkadot Ecosystem Hub, si occupa di divulgazione sull&apos;ecosistema di Polkadot e Kusama in lingua italiana e basato su una piattaforma di blogging decentralizzata.
                     </Text>
                     <br />
                     <Text>
                        Polkadot Arena nasce dalla volontà di alcuni membri italiani della comunità Polkadot di porre rimedio alla frammentazione dei canali di informazione italiana riguardo all&apos;ecosistema. Creando un canale unico, l&apos;idea è quella di rendere Polkadot più avvicinabile per l&apos;utente medio e attrarre più partecipanti al network.
                     </Text>
                     <Box display={{ base: 'none', md: 'flex' }} mt={6}>
                        <HStack as={'nav'} spacing={0}>
                           <NevItems />
                        </HStack>
                     </Box>
                     <Box pb={4} display={{ md: 'none' }} mt={6}>
                        <Stack as={'nav'} spacing={5}>
                           <NevItems />
                        </Stack>
                     </Box>
                  </GridItem>
               </GridItem>
               <GridItem colSpan={{ base: 12, md: 6 }} p={6}>
                  <Box>
                     <Heading as="h3" fontSize="xl" mb={3}>
                        Seguici sui social
                     </Heading>
                     <HStack gap={6}>
                        <SocialLink />
                     </HStack>
                  </Box>
                  <Box mt={6}>
                     <Heading as="h3" fontSize="l" mb={3}>
                        For Tips
                     </Heading>
                     <Text>
                        Polkadot Arena non è un progetto a scopo di lucro, tutti
                        i creatori di contenuti e i dev lavorano per passione raccogliendo qualche tips di tanto in tanto. Se volete sostenere il nostro lavoro ve ne saremo grati!
                     </Text>
                     <br />
                     <code>
                        KSM: HtGyGQUdXmxymLTmN1x9VHxztRfTDRSo45U4SaQQKB17E8u
                     </code>
                     <br />
                     <code>
                        DOT: 16JxTHKfrx2WfeXXxJFuPgm7hv95LrAQRAyCq5HoUbz2YZQL
                     </code>
                  </Box>
               </GridItem>
            </Grid>
         </footer>
         <script id="usercentrics-cmp" src="https://app.usercentrics.eu/browser-ui/latest/loader.js" data-settings-id="nUbs8uApnPFaT9" async></script>
         <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-JX4B732Y5X"
         ></Script>
         <script
            dangerouslySetInnerHTML={{
               __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JX4B732Y5X', {
                page_path: window.location.pathname,
                });
            `,
            }}
         />
      </>
   )
}
