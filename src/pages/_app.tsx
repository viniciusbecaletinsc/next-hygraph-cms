import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme'

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default App