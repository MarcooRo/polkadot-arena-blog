import { ArrowBackIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function GoBack() {
  const router = useRouter()

  return (
  <Link
    _hover={{
      textDecoration: 'none'
    }}>
    <span onClick={() => router.back()}>
      <a><ArrowBackIcon w={6} /> Torna indietro</a>
    </span>
  </Link>
  )
}