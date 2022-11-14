export interface ITmap {
    id: string;
    createdAtTime:number;
    title: string;
}

const SitemapComp: React.FC<ITmap> = props => {
    const date = new Date(props?.createdAtTime);
    let linkname = props.title
    if(linkname != undefined){
        var titleURL = "https://polkadotarena.blog/news/"+linkname.replaceAll(' ', '-')+"?id="+props.id
    } else {
        var titleURL = "https://polkadotarena.blog/news/"+linkname+"?id="+props.id
    }
    return(
        <>
        dangerouslySetInnerHTML={{
                __html: `<url>
        <loc>${titleURL}</loc>
        <lastmod>${date.toLocaleDateString()}</lastmod>
      </url>`,
    }}
      </>
  )
}

export default SitemapComp;