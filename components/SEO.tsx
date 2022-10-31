import ipfsContect from "./ipfsURL";

export interface ITcard {
    posts: ITcard;
    id: string;
    createdAtTime:number;
    image: string;
    title: string;
    downvotesCount: number;
    summary: string;
    tagsOriginal: string;
    body: string;
    canonical: string;
}

const SingleComponent: React.FC<ITcard> = props =>{
    return(
        <>
        <meta name="description" content={props.posts.summary} />
        <meta itemProp="name" content={props.posts.title} />
        <meta itemProp="description" content={props.posts.summary} />
        <meta itemProp="image" content={ipfsContect.ipfsURL+props.posts.image} />
        <meta property="og:title" content={props.posts.title} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:image" content={ipfsContect.ipfsURL+props.posts.image} />
        </>
    )
}

export default SingleComponent;