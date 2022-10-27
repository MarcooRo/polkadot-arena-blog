import Image from 'next/image';
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
} from '@chakra-ui/react';
import ipfsContect from './ipfsURL';

export interface ITcard {
    id: string;
    createdAtTime:number;
    image: string;
    title: string;
    downvotesCount: number;
    summary: string;
    tagsOriginal: string;
    ownedByAccount: {
        profileSpace: {
            name: string;
            image: string
        }
    }
    space:{
        id: string
        name: string
        image: string
    }
}


const CardComponent: React.FC<ITcard> = props => {
    const date = new Date(props?.createdAtTime);
    let linkname = props.title
    if(linkname != undefined){
        var titleURL = "/news/"+linkname.replaceAll(' ', '-')+"?id="+props.id
    } else {
        var titleURL = "/news/"+linkname+"?id="+props.id
    }
    return(
        <Box boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'} id={props.id}>
            <Box h={'190px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                <Link key={titleURL} as={titleURL} href={titleURL}>
                    <a>
                    <Image
                    src={ipfsContect.ipfsURL+props?.image}
                    layout={'fill'}
                    alt={props?.title}
                    />
                    </a>
                </Link>
            </Box>
            <HStack mb={3} spacing={1}>
                {props?.tagsOriginal.split(",").slice(-2).map((tag) => (
                    <Link href={`/categoria/${tag}`} key={tag}>
                        <a><Tag size='sm' variant='solid'>{tag}</Tag></a>
                    </Link>
                ))}
            </HStack>
            <Stack>
                <Link key={titleURL} as={titleURL} href={titleURL}>
                    <a>
                    <Heading as='h3' fontSize='xl'>
                        {props?.title}
                    </Heading>
                    </a>
                </Link>
                {<Text>
                    {props?.summary.substring(0,150)}
                </Text>}
            </Stack>
            <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                {props.space.id == '7218' ? <Avatar src={ipfsContect.ipfsURL+props.space?.image}/> : <Avatar src={ipfsContect.ipfsURL+props.ownedByAccount.profileSpace?.image}/>}
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    {props.space.id == '7218' ? <Text>WagMedia Italia</Text> : <Text fontWeight={600}>{props.ownedByAccount.profileSpace?.name}</Text>}
                    <Text color={'gray.500'}>{date.toLocaleDateString()}</Text>
                </Stack>
            </Stack>
        </Box>
  )
}

export default CardComponent;