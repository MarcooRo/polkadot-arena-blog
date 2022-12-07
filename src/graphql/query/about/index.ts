import { gql } from '@apollo/client'
import { TeamToShow } from '../../../components/Space'
import { graphqlQuery } from '../query'

export const aboutPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${TeamToShow()}
      `,
   })
}
