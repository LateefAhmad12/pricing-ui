
import Icon from "@chakra-ui/icon";
import {  Box, Flex, HStack, Text } from "@chakra-ui/react";
import BadgeIcon from "./Icon/badge";
import CheckIcon from "./Icon/checkicon";
import CircleIcon from "./Icon/circle";
import StarIcon from "./Icon/star";

export default function LastBox(){
    return(
        <>
        <Box mt={10}
        ml={370}>
            <Flex p={10}>
     <HStack> 
       <Icon as={StarIcon} w={10}
        h={10} 
        mr={10}/>
      <Text p={3}>30 days money back Guarantee</Text>
    </HStack>
    <HStack>
      <Icon as={BadgeIcon}/>
      <Text p={3}>30 days money back Guarantee</Text>
    </HStack>
      <HStack>
        <Icon as={CircleIcon}/>
        <Text p={3}>30 days money back Guarantee</Text>
      </HStack>
            </Flex>
        </Box>
        </>
    
    )
}
