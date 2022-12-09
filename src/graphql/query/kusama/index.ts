import { gql } from '@apollo/client'
import { allSpaces } from '../../whitelist'
import { filterIds, spaceData } from '../utils'
import { graphqlQuery } from '../query'

export const kusamaPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${showKusamaFeed()}
      `,
   })
}

export function showKusamaFeed() {
   return `query MyQuery {
      posts(where: {tagsOriginal_contains: "Kusama", AND: {space: ${filterIds(
         allSpaces
      )}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${spaceData()}    
      }
    }`
}
