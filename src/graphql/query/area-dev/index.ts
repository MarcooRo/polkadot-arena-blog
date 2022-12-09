import { gql } from '@apollo/client'
import { allSpaces } from '../../whitelist'
import { filterIds, spaceData } from '../utils'
import { graphqlQuery } from '../query'

export const devPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
        query MyQuery {
          posts(where: {tagsOriginal_contains: "Blockchain", AND: {space: ${filterIds(
             allSpaces
          )}}, hidden_eq: false}) {
            ${spaceData()}    
          }
        }
      `,
   })
}
