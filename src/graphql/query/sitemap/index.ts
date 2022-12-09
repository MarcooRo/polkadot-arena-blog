import { gql } from '@apollo/client'
import { allSpaces } from '../../whitelist'
import { postQuery } from '../utils'
import { graphqlQuery } from '../query'

export const siteMapQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(allSpaces, true)}
      `,
   })
}
