import { UnlockIcon } from "@chakra-ui/icons"
import { 
  Flex, 
  Heading, 
  Box, 
  Text, 
  Button, 
  Spacer, 
  HStack, 
  useToast 
} from "@chakra-ui/react"

export default function Navbar() {
  const toast = useToast()

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px 15px" borderRadius="50%">M</Box>
        <Text>mario@netninja.dev</Text>
        <Button 
          colorScheme="purple"
          onClick={() => toast({
            title: 'Logged out.',
            description: "Successfully logged out",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />,
          })}
        >Logout</Button>
      </HStack>
    </Flex>
  )
}
