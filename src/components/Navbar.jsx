import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {

  const toast = useToast()

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }

  return (
    <Flex as="nav" p="10px" mb={"40px"} alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>

      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninja.com</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>

    /*
    <Flex bg="gray.200" justify="space-around" wrap="wrap" gap="2">
      <Box w="150px" h="50px" bg="red">1</Box>
      <Box w="150px" h="50px" bg="blue">2</Box>
      <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
      <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    </Flex>
    */
  );
}
