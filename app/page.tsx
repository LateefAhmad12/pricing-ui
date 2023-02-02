'use client'
import Header from './header'

// const inter = Inter({ subsets: ['latin'] })
import { Box, ChakraProvider } from '@chakra-ui/react'
import Pricing from './pricing'

export default function Home() {
  return (
    <ChakraProvider>
      <Header/>
      <Pricing/>
  
    </ChakraProvider>
  )
}
