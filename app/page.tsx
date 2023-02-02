'use client'
import Header from './header'
import {Box, ChakraProvider } from '@chakra-ui/react'
import Pricing from './pricing'
import LastBox from './lastbox'

export default function Home() {
  return (
    <ChakraProvider>
      <Box>
      <Header/>
      <Pricing/>
      <LastBox/>
      </Box>
  
    </ChakraProvider>
  )
}
