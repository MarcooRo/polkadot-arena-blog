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
import ipfsContect from './setting';

export interface ITcard {
    id: string;
    createdAtTime:number;
    image: string;
    title: string;
    downvotesCount: number;
    summary: string;
    tagsOriginal: string;
}

const CardComponent: React.FC<ITcard> = props => {
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
                    <Link href={`/category/${tag}`} key={tag}>
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
        </Box>
  )
}

export default CardComponent;

