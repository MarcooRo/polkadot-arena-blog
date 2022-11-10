import Link from 'next/link';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Tag,
  HStack,
  List,
  ListItem,
} from '@chakra-ui/react';
import ipfsContect from './ipfsURL';

export interface ITteam {
  profileSpace: {
      id:string,
      about: string,
      image: string,
      name: string,
      email: string,
      linksOriginal: string
  }
}

const CardTeam:React.FC<ITteam> = props => {
    return(
      <>
       <Box maxW={'280px'} w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={ipfsContect.ipfsURL+props.profileSpace?.image}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {props.profileSpace?.name}
          </Heading>
          <Text
            textAlign={'left'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3} py={3}>
            {props.profileSpace?.about}
          </Text>
          <List fontWeight={600} color={'gray.500'} mb={4}>
          {props.profileSpace?.linksOriginal?.split(",").map(tag =>
              <ListItem key={props.profileSpace?.id}>
                <Link href={tag}>
                   <a>{tag}</a>
                </Link>
              </ListItem>
            )}
            </List>
      </Box>
      </>
    )
}

export default CardTeam