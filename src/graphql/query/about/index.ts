import { gql } from '@apollo/client'
import { teamAddresses } from '../../whitelist'
import { teamList } from '../utils'
import { graphqlQuery } from '../query'

export const aboutPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
         ${teamToShow()}
      `,
   })
}

export function teamToShow() {
   return `query MyQuery {
      accounts(where: ${teamList(teamAddresses)}) {
        profileSpace {
          id
          about
          image
          name
          email
          linksOriginal
        }
      }
    }`
}
