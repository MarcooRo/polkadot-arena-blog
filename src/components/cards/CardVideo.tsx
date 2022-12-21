import Link from 'next/link'
import {
   Box,
   Heading,
   Text,
   Stack,
   Avatar,
   Tag,
   HStack,
} from '@chakra-ui/react'
import ipfsContent from '../../ipfs'

export interface ITcardVideo {
   id: string
   createdAtTime: number
   image: string
   title: string
   downvotesCount: number
   summary: string
   tagsOriginal: string
   link: string
   ownedByAccount: {
      profileSpace: {
         name: string
         image: string
      }
   }
   space: {
      id: string
      name: string
      image: string
   }
}

const CardComponentVideo: React.FC<ITcardVideo> = (props) => {
   const date = new Date(props?.createdAtTime)
   let linkname = props.title
   let cate = props.tagsOriginal?.split(',').reverse().slice(-1)
   let youtube = props.link?.substring(props.link?.lastIndexOf('/') + 1)
   let linkYT = 'https://www.youtube.com/embed/' + youtube

   if (linkname != undefined) {
      var titleURL =
         '/news/' +
         linkname.replaceAll(' ', '-') +
         '?id=' +
         props.id +
         '&cat=' +
         cate
   } else {
      var titleURL = '/news/' + linkname + '?id=' + props.id + '?cat=' + cate
   }
   return (
      <Box
         boxShadow={'2xl'}
         rounded={'md'}
         p={6}
         overflow={'hidden'}
         id={props.id}
      >
         <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <iframe width="100%" height="265" src={linkYT}></iframe>
         </Box>
         <HStack mb={3} spacing={1}>
            {props.tagsOriginal != '' &&
               props.tagsOriginal
                  ?.split(',')
                  .reverse()
                  .slice(-2)
                  .map((tag) => (
                     <Link href={`/categoria/${tag}`} key={tag}>
                        <a>
                           <Tag size="sm" variant="solid">
                              {tag}
                           </Tag>
                        </a>
                     </Link>
                  ))}
         </HStack>
         <Stack>
            <Heading as="h3" fontSize="xl">
               {props?.title}
            </Heading>
            {<Text>{props.summary?.substring(0, 150)}</Text>}
         </Stack>
         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            {props.space.id == '7218' ? (
               <Avatar src={ipfsContent.ipfsURL + props.space?.image} />
            ) : (
               <Avatar
                  src={
                     ipfsContent.ipfsURL +
                     props.ownedByAccount.profileSpace?.image
                  }
               />
            )}
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
               {props.space.id == '7218' ? (
                  <Text>Polkadot Arena</Text>
               ) : (
                  <Text fontWeight={600}>
                     {props.ownedByAccount.profileSpace?.name}
                  </Text>
               )}
               <Text color={'gray.500'}>{date.toLocaleDateString()}</Text>
            </Stack>
         </Stack>
      </Box>
   )
}

export default CardComponentVideo
