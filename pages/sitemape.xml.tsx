import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetServerSideProps, InferGetStaticPropsType } from "next";
import Sitemape, { ITmap } from "../components/Sitemap";
import { ShowAllSapces } from "../components/Space";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const client = new ApolloClient({
      uri: 'https://squid.subsquid.io/subsocial/graphql',
      cache: new InMemoryCache()
    });
  
    const { data } = await client.query({
      query: gql`
        ${ShowAllSapces()}   
      `
    });

    return {
      props: {
        posts: data.posts,
      }
    }
  
  }

function SiteMap({posts}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://polkadotarena.blog</loc>
     </url>
     <url>
       <loc>https://polkadotarena.blog/news</loc>
     </url>
     ${(posts as ITmap[]).map((post) => 
        <Sitemape {...post} key={post.id}/>                       
    )}
   </urlset>
 `;
}

export default SiteMap;