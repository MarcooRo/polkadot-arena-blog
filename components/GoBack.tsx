import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function GoBack() {
  const router = useRouter()

  return (
    <>
      <Link
        _hover={{
          textDecoration: 'none'
        }}>
          <a onClick={() => router.back()}>Torna indietro</a>
      </Link>
    </>
  )
}