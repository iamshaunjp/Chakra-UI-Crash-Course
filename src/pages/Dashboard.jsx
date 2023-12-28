import { Container, Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  // const boxStyles = {
  //   p: "20px",
  //   bg: "purple.400",
  //   c: "white",
  //   m: "10px",
  //   textAlign: "center",
  //   filter: 'blur(2px)',
  //   ':hover': {
  //     color: 'black',
  //     bg: 'blue.500'
  //   }
  // }

  const tasks = useLoaderData()

  return (
    /*
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="30px"> This is Dashboard </Heading>
      <Text marginLeft="30px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
        doloribus.
      </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quod dolorem maxime quos ut officia.
      </Text>

      <Box my="30px" bg="orange" p="20px">
        <Text color="white">
          This is a box1
        </Text>
      </Box>

      <Box sx={boxStyles}>
        <Text>
          This is the editable style
        </Text>
      </Box>
    </Container>
    */
   <>
    <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
      {tasks && tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </SimpleGrid>
   </>
  );
}

{/* <Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>

<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box> */}
export const tasksLoader = async () => {
  const res = await fetch('http:localhost:3000/tasks')

  return res.json()
}