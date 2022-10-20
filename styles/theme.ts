// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { compact } from '@apollo/client/utilities'
 
// Version 1: Using objects
export const theme = extendTheme({
  styles: {
    global: {
      h1:{
        fontFamily: "Unbounded-Regular!important"
      },
      components: {
        Heading:{
            h1:{
                fontFamily: "Unbounded-Regular"  
            }
        }
      }
    },
  },
})