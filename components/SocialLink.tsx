import { Icon } from "@chakra-ui/icons";
import { useColorModeValue, Box } from "@chakra-ui/react";

import Link from "next/link";
const Links = [
    { name: 'Twitter', url: 'https://twitter.com/', icon: '<FaTwitter />' },
    { name: 'Telegram', url: 'https://twitter.com/', icon: '<FaTwitter />' },
    { name: 'SubSocial', url: 'https://twitter.com/', icon: '<FaTwitter />' },
  ];

export default function SocialLink(){
    return(
        <Box gap={6}>
            {Links.map((link) => (
                <Link
                    style={{
                        textTransform: 'capitalize',
                    }}
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.200', 'gray.700'),
                    }}
                    target='_blank'
                    href={link.url}
                >
                <a style={{marginRight:'20px'}}>
                {link.name}
                </a>
                </Link>
            ))}
        </Box>
    )
}