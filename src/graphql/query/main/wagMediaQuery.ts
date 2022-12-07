import { gql } from '@apollo/client'
import { ShowWagMedia, ShowWMitalia } from '../../../components/Space'
import { graphqlQuery } from '../query'

export const wagMediaItalyQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${ShowWMitalia()}
      `,
   })
}

export const wagMediaQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${ShowWagMedia()}
      `,
   })
}
