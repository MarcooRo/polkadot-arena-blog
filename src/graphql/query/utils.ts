export const spaceData = () => {
   return `id
       createdAtTime
       image
       title
       downvotesCount
       summary
       tagsOriginal
       canonical
       link
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
}

export const articleData = () => {
   return `id
       canonical
       createdAtTime
       downvotesCount
       image
       title
       tagsOriginal
       body
       summary
       link
       ownedByAccount {
         profileSpace {
           name
           about
         }
       }`
}

export const siteMap = () => {
   return `id
     createdAtTime
     title
     `
}

export const postQuery = (ids: string[], isSiteMap?: boolean) => {
   return `query MyQuery {
        posts(where: {space: ${filterIds(
           ids
        )}, kind_eq: RegularPost, hidden_eq: false}, orderBy: createdAtTime_DESC) {
          ${isSiteMap ? siteMap() : spaceData()}
        }
      }`
}

export const filterIds = (ids: string[]) => {
   let value = ''
   let count = 0
   let i = 0
   for (i; i < ids.length - 1; i++) {
      if (value != '') {
         value += 'OR: '
      }
      value += '{id_eq: "' + ids[i] + '", '
      count++
   }
   if (value != '') {
      value += 'OR: '
   }
   count++
   value += '{id_eq: "' + ids[i] + '"' + '}'.repeat(count)

   return value
}

export const teamList = (teamList: string[]) =>
   filterIds(teamList) + ', orderBy: id_ASC'
