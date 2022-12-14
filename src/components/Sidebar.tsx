import { Box, useColorModeValue } from '@chakra-ui/react'
import { AdvSidebar } from './ads/Adv'
import { Tags } from './tags'
import { projects } from './tags/tags'

export default function Sidebar() {
   return (
      <>
         {/* <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
            <ParachainPolkadot />
        </Box>
        <Box borderTop='1px' borderColor='gray.200' pt={6} pb={6}>
            <ParachainKusama />
        </Box> */}
         <Box borderTop="1px" borderColor="gray.200" pt={6} pb={6}>
            <Tags
               text={'Scopri i progetti del mondo Dotsama'}
               projects={projects}
            />
         </Box>
         <Box
            borderTop="1px"
            borderColor="gray.200"
            pt={6}
            pb={6}
            bg={useColorModeValue('gray.100', 'gray.900')}
         >
            <AdvSidebar />
         </Box>
      </>
   )
}
