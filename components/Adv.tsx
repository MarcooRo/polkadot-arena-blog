import { Box, Image, Text, Link, Heading } from '@chakra-ui/react'
import React from 'react'

export function AdvSidebar(){
  const lazyRoot = React.useRef(null)

  return (
    <Box>
      <Link>
        <a href="https://iiv.dev/" target="_blank" rel="noopener noreferrer">
          <Heading as='h2' fontSize='l' mb={1} textAlign='center'>Polkadot/Kusama<br />professional validator</Heading>
          <Text mb={3} textAlign='center'><i>Sponsor By ONDIN</i></Text>
          <Image boxSize='250px' objectFit='cover' src='/ondin.svg' alt='adv' mx="auto"/>
        </a>
      </Link>
    </Box>
  )
}