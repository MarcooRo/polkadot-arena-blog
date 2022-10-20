import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export function AdvSidebar(){
  const lazyRoot = React.useRef(null)

  return (
    <Box>
          <Image boxSize='350px' objectFit='cover' src='/adv_placeholder.jpg' />
    </Box>
  )
}