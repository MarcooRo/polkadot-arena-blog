export function AllSapces() {
    return(
        '{id_eq: "6943", OR: {id_eq: "7183", OR: {id_eq: "10173", OR: {id_eq: "7218", OR: {id_eq: "7222", OR: {id_eq: "7250"}}}}}}'
    )
}
export function OnlyPersonal() {
    return(
        '{id_eq: "6943", OR: {id_eq: "7183", OR: {id_eq: "10173", OR: {id_eq: "7222", OR: {id_eq: "7250"}}}}}'
    )
}
export function WMitalia() {
    return(
        '{id_eq: "7218"}'
    )
}

export function SpaceData(){
    return(
        `id
        createdAtTime
        image
        title
        downvotesCount
        summary
        tagsOriginal
        canonical
        ownedByAccount {
          id
          profileSpace {
            name
            image
          }
        }
        space {
          id
          image
          name
        }`
    )
}

export function ArticleData(){
    return(
        `id
        canonical
        createdAtTime
        downvotesCount
        image
        title
        tagsOriginal
        body
        summary
        ownedByAccount {
          profileSpace {
            name
            about
          }
        }`
    )
}


// 6943 MarcoRo
// 7183 Yamne
// 10173 Manne
// 7222 Paull
// 8488 Mark889
// ZeroxSapo
// 7218 WM Italia
// 7250 capgallico