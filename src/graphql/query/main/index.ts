import { gql } from '@apollo/client'
import {
   dotleapSpace,
   highPostSpace,
   kusamarianSpace,
   otherSpaces,
   personalSpaces,
   wagMediaSpace,
   wmItalySpace,
} from '../../whitelist'
import { postQuery, spaceData } from '../utils'
import { graphqlQuery } from '../query'

export const personalQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(personalSpaces)}
      `,
   })
}

export const wagMediaItalyQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(wmItalySpace)}
      `,
   })
}

export const wagMediaQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(wagMediaSpace)}
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

export function highPostHome() {
   return `query MyQuery {
      postById(${'id: "' + highPostSpace + '"'}) {
        ${spaceData()}
      }
    }`
}

export const otherPostQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(otherSpaces)}
      `,
   })
}

export const kusamarianQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(kusamarianSpace)}
      `,
   })
}

export const dotLeapQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${postQuery(dotleapSpace)}
      `,
   })
}
