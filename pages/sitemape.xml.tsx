import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GetServerSideProps, InferGetStaticPropsType } from "next";
import { ShowSitemap } from "../components/Space";

export interface ITmap {
  id: string;
  createdAtTime:number;
  title: string;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const client = new ApolloClient({
      uri: 'https://squid.subsquid.io/subsocial/graphql',
      cache: new InMemoryCache()
    });
  
    const { data } = await client.query({
      query: gql`
        ${ShowSitemap()}   
      `
    });

    return {
      props: {
        posts: data.posts,
      }
    }
  
  }

function SiteMap({posts}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!--We manually set the two URLs we know already-->
        <url><loc>https://polkadotarena.blog</loc></url>
        <url><loc>https://polkadotarena.blog/news</loc></url>
        <url><loc>https://polkadotarena.blog/polkadot</loc></url>
        <url><loc>https://polkadotarena.blog/kusama</loc></url>
        <url><loc>https://polkadotarena.blog/about</loc></url>
        ${(posts as ITmap[]).map((post) => 
          `
            <url>
                <loc>https://polkadotarena.blog/news/${post.title?.replaceAll(' ', '-')}?id=${post.id}</loc>
                <lastmod>${post.createdAtTime}</lastmod>
            </url>
          `                     
        )}
    </urlset>`
  )
}

export default SiteMap;