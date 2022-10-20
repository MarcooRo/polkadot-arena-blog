import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  return <span onClick={() => router.back()}>Go back</span>
}