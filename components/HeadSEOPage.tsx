import Head from "next/head"
import ipfsContect from "./ipfsURL";
import { useRouter } from 'next/router'

let sito = 'https://polkadot-arena-blog.vercel.app/'
let logo = 'https://polkadot-arena-blog.vercel.app/orizzontale.png'
let favicon = 'https://polkadot-arena-blog.vercel.app/favicon.ico'

export interface SeoTag {
    imagePage: string;
    titlePage: string;
    summaryPage: string;
    // spaces: {
    //     id: string;
    //     createdAtTime:number;
    //     image: string;
    //     title: string;
    //     downvotesCount: number;
    //     summary: string;
    //     tagsOriginal: string;
    //     ownedByAccount: {
    //         profileSpace: {
    //             name: string;
    //             image: string
    //         }
    //     }
    //     space:{
    //         id: string
    //         name: string
    //         image: string
    //     }
    // }
}


const HeadSEO: React.FC<SeoTag> = props => {
    const router = useRouter()
    return(
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            {/*General tags */}
            <title>{props.titlePage}</title>
            <link rel="icon" type="image/x-icon" href={favicon} />
            <meta name="author" content="Polkadot Arena" />
            <meta name="description" content={props.summaryPage} />
            <meta name="robots" content="index, follow" />
            <meta name='language' content='IT' />
            <meta name='topic' content='Polkadot, Kusama, Blockchain, NFT, DeFi, web3' />
            <meta name='medium' content='blog' />

            {/* Open graph meta tags */}
            <meta property="og:locale" content="it_IT" />
            <meta property="og:site_name" content="Polkadot Arena" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={props.summaryPage} />
            <meta property="og:image" content={sito+props.imagePage} />
            <meta property="og:url" content={sito+router.asPath} />

            <meta name="twitter:card" content={props.summaryPage} />
            <meta name="twitter:site" content="@PolkadotArena" />
            <meta name="twitter:creator" content="@PolkadotArena" />

            {/* Schema Org */}
            <script type="application/ld+json">
                {`
                    "@context": "https://schema.org/",
                    "@type": "Blog",
                    "@id": "${sito+router.asPath}",
                    "mainEntityOfPage": "${sito}",
                    "name": "Polkadot Arena",
                    "description": "${props.summaryPage}",
                    "publisher": {
                        "@type": "Organization",
                        "@id": "${sito}",
                        "name": "Polkadot Arena",
                        "logo": {
                            "@type": "ImageObject",
                            "@id": "${logo}",
                            "url": "${logo}",
                            "width": "600",
                            "height": "60"
                        }
                    },
                `}
                </script>
        </Head>
    )
}

export default HeadSEO;

    // "blogPost": [
    //     ${props.spaces.map((element:any, index: string | number) => {
    //         return props.spaces[index].posts.map((post:JSX.IntrinsicAttributes & SeoTag) => 
    //         `{
    //             "@type": "BlogPosting",
    //             "@id": "${sito+router.asPath+post.title.replaceAll(' ', '-')}",
    //             "mainEntityOfPage": "${sito+router.asPath}",
    //             "headline": "${post.title}",
    //             "name": "${post.title}",
    //             "description": "${post.summary}",
    //             "datePublished": "${post.createdAtTime}"
    //             "author": {
    //                 "@type": "Person",
    //                 "@id": "${sito+router.asPath}",
    //                 "name": "${post.ownedByAccount.profileSpace?.name}"
    //             },
    //             "image": {
    //                 "@type": "ImageObject",
    //                 "@id": "${ipfsContect.ipfsURL+post?.image}",
    //                 "url": "${ipfsContect.ipfsURL+post?.image}",
    //                 "height": "362",
    //                 "width": "388"
    //             },
    //             "url": "${sito+router.asPath+post.title.replaceAll(' ', '-')}"
    //         }`,
    //       )}
    //     )}                        
    // ]