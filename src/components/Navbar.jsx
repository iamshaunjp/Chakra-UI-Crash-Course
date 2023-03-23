import { Flex, Box, Text, Button,Heading, HStack, Spacer } from "@chakra-ui/react";



export default function Navbar() {
    return (
        <Flex as="nav" p='10px' alignItems="center"     >
            <Heading as='h1'> TRUCE</Heading>
            <Spacer />

            <HStack spacing={8} alignItems="center">
                <Box bg='gray.200' p="10px">
                    OS
                    </Box>
                    <Text>Obiano Raph</Text>
                    <Button colorScheme="blue">Logout</Button>
                    
                    
                    </HStack>
            
            
            </Flex>


    )};