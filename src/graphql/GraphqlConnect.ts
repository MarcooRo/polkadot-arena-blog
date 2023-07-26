import {
   ApolloClient,
   InMemoryCache,
   NormalizedCacheObject,
} from '@apollo/client'


export class GraphqlConnect {
   private static instance: GraphqlConnect | null = null
   private client: ApolloClient<NormalizedCacheObject> | null = null

   private constructor() {}

   static getInstance = () => {
      if (this.instance == null) {
         this.instance = new GraphqlConnect()
      }
      return this.instance
   }

   getSubsocialGraphql = () => {
      if (this.client == null) {
         this.client = new ApolloClient({
            uri: 'https://squid.subsquid.io/subsocial/graphql',
            cache: new InMemoryCache(),
         })
      }
      return this.client
   }
}
