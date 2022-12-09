import { Heading, Tag } from '@chakra-ui/react'
import Link from 'next/link'

type TagsProps = {
   text: string
   projects: string[]
}

export function Tags({ text, projects }: TagsProps) {
   return (
      <div>
         <Heading as="h2" fontSize="l" pb={6}>
            {text}
         </Heading>
         {projects.map((parachain) => (
            <Link href={`/categoria/${parachain}`} key={parachain}>
               <a>
                  <Tag
                     size="md"
                     m={1}
                     key={parachain}
                     variant="solid"
                     colorScheme="teal"
                  >
                     {parachain}
                  </Tag>
               </a>
            </Link>
         ))}
      </div>
   )
}
