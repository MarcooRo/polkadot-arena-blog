import { gql } from '@apollo/client'
import { AllSapces, SpaceData } from '../../../components/Space'
import { graphqlQuery } from '../query'

export const devPageQuery = async () => {
   return await graphqlQuery({
      query: gql`
        query MyQuery {
          posts(where: {tagsOriginal_contains: "Blockchain", AND: {space: ${AllSapces()}}, hidden_eq: false}) {
            ${SpaceData()}    
          }
        }
      `,
   })
}
