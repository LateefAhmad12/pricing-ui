'use client'
import Header from './Icon/header'
import {Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/nav-bar'

import About from './about/page'
import Hero from './components/hero'

export default function Home() {
  return (
    <ChakraProvider>
    <NavBar/>
    <Hero/>
    </ChakraProvider>
  )
} 
