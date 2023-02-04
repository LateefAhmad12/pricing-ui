import { Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
    <Box textAlign={{base:'left', md:'center', lg:'center'}} bg='#6b46c1' pt='60px' pb='240px' textColor={'white' }>
        <Heading>Simple Pricing for your bussiness</Heading>
        <Text pt='10px'>Plan that are carefully crafted to suit your bussiness</Text>
    </Box>
    </>
  )
}
