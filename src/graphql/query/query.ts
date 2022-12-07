import { GraphqlConnect } from '../GraphqlConnect'

interface GraphqlQuery {
   query: any
}

export const graphqlQuery = async (graphqlQuery: GraphqlQuery) => {
   const client = GraphqlConnect.getInstance().getSubsocialGraphql()
   return await client.query(graphqlQuery)
}
