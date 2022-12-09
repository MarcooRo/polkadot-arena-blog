import Head from 'next/head'
import ipfsContent from '../../ipfs'
import { useRouter } from 'next/router'

let sito = 'https://polkadot-arena-blog.vercel.app'
let logo = 'https://polkadot-arena-blog.vercel.app/orizzontale.png'
let favicon = 'https://polkadot-arena-blog.vercel.app/favicon.ico'

export interface SeoTag {
   posts: SeoTag
   id: string
   createdAtTime: number
   image: string
   title: string
   downvotesCount: number
   summary: string
   tagsOriginal: string
   body: string
   canonical: string
}

const HeadSEO: React.FC<SeoTag> = (props) => {
   const router = useRouter()
   return (
      <Head>
         <meta charSet="utf-8" />
         <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
         />

         {/*General tags */}
         <title>{props.title}</title>
         <link rel="shortcut icon" type="image/ico" href={favicon} />
         <meta name="author" content="Polkadot Arena" />
         <meta name="description" content={props.summary} />
         <meta name="robots" content="index, follow" />
         <meta name="medium" content="blog" />

         {/* Open graph meta tags */}
         <meta property="og:locale" content="it_IT" />
         <meta property="og:site_name" content="Polkadot Arena" />
         <meta property="og:type" content="website" />
         <meta property="og:description" content={props.summary} />
         <meta
            property="og:image"
            content={ipfsContent.ipfsURL + props.image}
         />
         <meta property="og:url" content={sito + router.asPath} />

         <meta name="twitter:card" content={props.summary} />
         <meta name="twitter:site" content="@PolkadotArena" />
         <meta name="twitter:creator" content="@PolkadotArena" />

         {/* Schema Org */}
         <script type="application/ld+json">
            {`
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "url": "${sito + router.asPath}",
                "publisher":{
                    "@type":"Organization",
                    "name":"Polkadot Arena",
                    "logo":"${logo}"
                },
                "headline": "${props.title}",
                "mainEntityOfPage": "${sito + router.asPath}",
                "image":"${ipfsContent.ipfsURL + props.image}",
                "datePublished":"${props.createdAtTime}"
                `}
         </script>
      </Head>
   )
}

export default HeadSEO
