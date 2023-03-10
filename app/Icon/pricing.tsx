import { Box, Flex, Heading, Text,Button, VStack, HStack } from '@chakra-ui/react'
import CheckIcon from './checkicon'
import Icon from "@chakra-ui/icon";

export default function Pricing() {
  return (
    <>
    <Box mx={{base:'22px', md:'15px', lg:'auto'}} maxW={930} mt='-150px' borderRadius={10} overflow='hidden' boxShadow={'dark-lg'}>
        <Flex direction={{base: 'column', md:'column', lg:'row'}}>
        <Box bg='gray.400' p='20' maxH={'336px'} maxW={'336px'} justifyItems={'center'} alignItems={'center'} >
          <VStack>
        <Text fontSize='24px' fontWeight='bold'>Premium PRO</Text>
        <Heading fontSize='60px'>$329</Heading>
        <Text>billed just once</Text>
        <Button textAlign={'center'} bg={'#805AD5'} color='white' w='200px' h='51px' m={'auto'}>Get Started</Button>
        </VStack>
        </Box>
        <Box bg='white' p='10' maxH={'336px'} maxW={'600px'} >
            <Text mb={'7'}>Access these features when you get this pricing package for your business.</Text>
            <HStack pb={'9px'}><Icon as={CheckIcon}/><Text>International calling and messaging API</Text></HStack>
            <HStack pb={'9px'}><Icon as={CheckIcon}/><Text>Additional phone numbers</Text></HStack>
            <HStack pb={'9px'}><Icon as={CheckIcon}/><Text>Automated messages via Zapier</Text></HStack>
            <HStack pb={'9px'}><Icon as={CheckIcon}/><Text>24/7 support and consulting</Text></HStack>
        </Box>
        </Flex>
    </Box>
    </>
  )
}
