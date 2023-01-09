import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {

  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box bg="white" height="200px" border="1px solid">
        <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hello</Text>
      </Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}
