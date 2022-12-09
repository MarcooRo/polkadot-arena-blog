import Link from 'next/link'
import {
   Box,
   Heading,
   Text,
   Avatar,
   useColorModeValue,
   List,
   ListItem,
} from '@chakra-ui/react'
import ipfsContent from '../../ipfs'

export interface ITteam {
   profileSpace: {
      id: string
      about: string
      image: string
      name: string
      email: string
      linksOriginal: string
   }
}

const CardTeam: React.FC<ITteam> = (props) => {
   return (
      <>
         <Box
            maxW={'340px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
         >
            <Avatar
               size={'xl'}
               src={ipfsContent.ipfsURL + props.profileSpace?.image}
               mb={4}
               pos={'relative'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
               {props.profileSpace?.name}
            </Heading>
            <Text
               textAlign={'left'}
               color={useColorModeValue('gray.700', 'gray.400')}
               px={3}
               py={3}
            >
               {props.profileSpace?.about}
            </Text>
            <List
               fontWeight={600}
               color={'gray.500'}
               px={3}
               py={3}
               textAlign={'left'}
            >
               {props.profileSpace?.linksOriginal?.split(',').map((tag) => (
                  <ListItem key={props.profileSpace?.id}>
                     <Link href={tag}>
                        <a>{tag}</a>
                     </Link>
                  </ListItem>
               ))}
            </List>
         </Box>
      </>
   )
}

export default CardTeam
