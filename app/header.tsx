import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign='center' bg='#6b46c1' pt='60px' pb='240px' color='white'>
        <Heading>Simple Pricing for your bussiness</Heading>
        <Text pt='10px'>Plan that are carefully crafted to suit your bussiness</Text>
    </Box>
  )
}
