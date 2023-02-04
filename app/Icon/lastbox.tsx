
import Icon from "@chakra-ui/icon";
import {  Box, Flex, HStack, Text } from "@chakra-ui/react";
import BadgeIcon from "./badge";
import CircleIcon from "./circle";
import StarIcon from "./star";

export default function LastBox(){
    return(

        <Box ml={350} mr={350}>
            <Flex p={10} direction={{base:'column',  md:'column', lg:'row'}}>
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

    
    
    )
}
