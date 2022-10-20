import { SubsocialApi } from '@subsocial/api/subsocial'
import config from './config'
const spaceId = '7218' //WAGMEDIA ITALIA

export const fetchPosts = async () => {
  const flatApi = await SubsocialApi.create(config)
  const postIds = await flatApi.blockchain.postIdsBySpaceId(spaceId as any)
  //const postIds = await flatApi.subsocial.substrate.postIdsBySpaceId(spaceId as any)
  const posts = await flatApi.subsocial.findPosts({ ids: postIds })
  console.log(posts)
  return posts
}

export const fetchSinglePost = async (postid: any) => {
  const flatApi = await SubsocialApi.create(config)
  const singlePost = flatApi.findPost({ id: postid })
  console.log(singlePost)
  return singlePost
}