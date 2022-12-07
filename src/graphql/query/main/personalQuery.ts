import { gql } from '@apollo/client'
import { ShowOnlyPersonal } from '../../../components/Space'
import { graphqlQuery } from '../query'

export const personalQuery = async () => {
   return graphqlQuery({
      query: gql`
         ${ShowOnlyPersonal()}
      `,
   })
}
