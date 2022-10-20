import {Grid, GridItem, Heading, Text, Box, HStack } from "@chakra-ui/react";
import SocialLink from "./SocialLink";

export default function Footer(){
    return(
        <>
            <footer>
                <Grid templateColumns='repeat(12, 1fr)' gap={4} py={30} borderTop='1px' borderColor='gray.200'>
                    <GridItem colSpan={{base: 12, md: 6}} p={6}>
                        <GridItem>
                            <Heading as='h3' fontSize='xl' mb={3}>Polkadto Arena</Heading>
                            <Text>Siamo un gruppo di Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo consequuntur id ipsum impedit. Consequatur ipsam corporis alias magnam modi adipisci, cumque nihil, quae aperiam, nisi repudiandae cupiditate. Numquam, consectetur!</Text>
                        </GridItem>
                    </GridItem>
                    <GridItem colSpan={{base: 12, md: 6}} p={6}>
                    <Heading as='h3' fontSize='xl' mb={3}>Seguici sui social</Heading>
                        <HStack gap={6}>
                            <SocialLink />
                        </HStack>
                    </GridItem>
                </Grid>
            </footer>
        </>
    )
}