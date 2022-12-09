import { gql } from '@apollo/client'
import { ParsedUrlQuery } from 'querystring'
import { allSpaces, newsItaSpaces } from '../../whitelist'
import { articleData, filterIds, postQuery, spaceData } from '../utils'
import { highPostHome } from '../main'
import { graphqlQuery } from '../query'

export const spacesQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(newsItaSpaces)}
      `,
   })
}

export const highPostQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${highPostHome()}
      `,
   })
}

export const postsQuery = async (query: ParsedUrlQuery) => {
   return await graphqlQuery({
      query: gql`
  query MyQuery {
    postById(id: "${query.id}") {
      ${articleData()}
    }
  }
  `,
   })
}

export const otherPostsQuery = async (query: ParsedUrlQuery) => {
   return await graphqlQuery({
      query: gql`
    query MyQuery {
      posts(where: {tagsOriginal_contains: "${
         query.cat
      }", AND: {space: ${filterIds(
         allSpaces
      )}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${spaceData()}    
      }
    }
  `,
   })
}
