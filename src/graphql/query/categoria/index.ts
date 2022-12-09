import { gql } from '@apollo/client'
import { ParsedUrlQuery } from 'querystring'
import { allSpaces } from '../../whitelist'
import { filterIds, spaceData } from '../utils'
import { graphqlQuery } from '../query'

export const categoryQuery = async (query: ParsedUrlQuery) => {
   return await graphqlQuery({
      query: gql`
    query MyQuery {
      posts(where: {tagsOriginal_contains: "${
         query.title
      }", AND: {space: ${filterIds(
         allSpaces
      )}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${spaceData()}    
      }
    }
  `,
   })
}
