import type { GetServerSideProps } from 'next'
import Nav from '../../components/navigation/Nav'
import { useRouter } from 'next/router'
import SingleComponent, { ITpost } from '../../components/post/SinglePost'
import HeadSEOArticle from '../../components/seo/HeadSEOArticle'
import { SimpleGrid, Box } from '@chakra-ui/react'
import CardComponent, { ITcard } from '../../components/cards/CardNews'
import { otherPostsQuery, postsQuery } from '../../graphql/query/news'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   const { data: posts } = await postsQuery(query)
   const { data: morepost } = await otherPostsQuery(query)

   return {
      props: {
         posts: posts.postById,
         morepost: morepost.posts,
      },
   }
}

function Post({ posts, morepost }: ITpost) {
   let router = useRouter()

   if (router.isFallback) {
      return <div>Loading...</div>
   }

   return (
      <>
         <HeadSEOArticle {...posts} />
         <Nav />
         <SingleComponent {...posts} />
         <SimpleGrid px={30} py={20}>
            <Box>
               <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
                  {(morepost as unknown as ITpost[]).slice(0, 4).map((post) => (
                     <CardComponent {...post} key={post.id} />
                  ))}
               </SimpleGrid>
            </Box>
         </SimpleGrid>
      </>
   )
}

export default Post
