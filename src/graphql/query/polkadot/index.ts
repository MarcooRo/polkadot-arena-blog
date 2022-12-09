import { gql } from '@apollo/client'
import { allSpaces } from '../../whitelist'
import { filterIds, spaceData } from '../utils'
import { graphqlQuery } from '../query'

export const polkadotPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${showPolkadotFeed()}
      `,
   })
}

export function showPolkadotFeed() {
   return `query MyQuery {
      posts(where: {tagsOriginal_contains: "Polkadot", AND: {space: ${filterIds(
         allSpaces
      )}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${spaceData()}    
      }
    }`
}
