import { Box, Flex, Heading, Text,Button, VStack } from '@chakra-ui/react'

export default function Pricing() {
  return (
    <Box m='auto' w='1000px' mt='-150px' borderRadius={10} overflow='hidden'>
        <Flex>
        <Box bg='gray.400' p='20' h='336px' w='336px' justifyItems={'center'} alignItems={'center'} >
          <VStack>
        <Text fontSize='24px' fontWeight='bold'>Premium PRO</Text>
        <Heading fontSize='60px'>$329</Heading>
        <Text>billed just once</Text>
        <Button textAlign={'center'} bg={'#805AD5'} color='white' w='200px' h='51px' m={'auto'}>Get Started</Button>
        </VStack>
        </Box>
        <Box bg='white' p='20' h='336px' w='600px' >
            <Text>Access these features when you get this pricing package for your business.</Text>
            <Text>International calling and messaging API</Text>
            <Text>International calling and messaging API</Text>
            <Text>International calling and messaging API</Text>
        </Box>
        </Flex>
    </Box>
  )
}
