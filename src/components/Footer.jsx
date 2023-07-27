import { Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';


const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"}
    
    // mt={"-6"}
    minH={"48"}
    px={"16"}
    py={["16","8"]}
    >
        <Stack 
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}>


        <VStack w={"full"} alignItems={["center",'flex-start']}>
            <Text fontSize={"bold"}>About Us</Text>
            <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are the best crypto information app in India, we provide 
                 correct and live information without any charges. </Text>
        </VStack>
        <VStack>
        
            <Text>Our Founder <br/> Subham Swain</Text>
        </VStack>
        </Stack>

    </Box>
  )
}

export default Footer