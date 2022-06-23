import { PREV_PATH_STORAGE_KEY } from '#/constants/storage'
import '#root/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { usePrevious } from 'use-hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const prevPath = usePrevious(router.pathname)

  useEffect(() => {
    sessionStorage.setItem(PREV_PATH_STORAGE_KEY, prevPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  return <Component {...pageProps} />
}

export default MyApp
