// 6943 MarcoRo
// 7183 Yamne
// 10173 Manne
// 7222 Paull
// 8488 Mark889
// ZeroxSapo
// 7250 capgallico
// 7218 WM Italia
// 6111 WM weeky recap

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

export function AllSapces() {
    return(
        '{id_eq: "6943", OR: {id_eq: "7183", OR: {id_eq: "10173", OR: {id_eq: "7218", OR: {id_eq: "7222", OR: {id_eq: "7250", OR: {id_eq: "8488"}}}}}}}'
    )
}
export function OnlyPersonal() {
    return(
        '{id_eq: "6943", OR: {id_eq: "7183", OR: {id_eq: "10173", OR: {id_eq: "7222", OR: {id_eq: "7250", OR: {id_eq: "8488"}}}}}}'
    )
}
export function WMitalia() {
    return(
        '{id_eq: "7218"}'
    )
}
export function WagMedia() {
  return(
      '{id_eq: "6111"}'
  )
}


export function ShowWMitalia(){
  return(
    `query MyQuery {
      posts(where: {space: ${WMitalia()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowAllSapces(){
  return(
    `query MyQuery {
      posts(where: {space: ${AllSapces()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowWagMedia(){
  return(
    `query MyQuery {
      posts(where: {space: ${WagMedia()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowOnlyPersonal(){
  return(
    `query MyQuery {
      posts(where: {space: ${OnlyPersonal()}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}
      }
    }`
  )
}
export function ShowPolkadotFeed(){
  return(
    `query MyQuery {
      posts(where: {tagsOriginal_contains: "Polkadot", AND: {space: ${AllSapces()}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}    
      }
    }`
  )
}
export function ShowKusamaFeed(){
  return(
    `query MyQuery {
      posts(where: {tagsOriginal_contains: "Kusama", AND: {space: ${AllSapces()}}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
        ${SpaceData()}    
      }
    }`
  )
}