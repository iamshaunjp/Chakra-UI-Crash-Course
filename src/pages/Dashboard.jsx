import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
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

  const tasks = useLoaderData();

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
        {tasks &&
          tasks.map((task) => (
            <Card key={task.id} borderTop={"8px"} borderColor={"purple.400"} bg={"white"}>
              <CardHeader color={"gray.700"}>
                <Flex gap={5}>
                  <Box w="50px" h="50px">
                    <Text>AV</Text>
                  </Box>
                  <Box>
                    <Heading as="h3" size="sm">
                      {task.title}
                    </Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>

              <CardBody color="gray.500">
                <Text>{task.description}</Text>
              </CardBody>

              <Divider borderColor={"gray.200"} />

              <CardFooter>
                <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                  <Button variant="ghost" rightIcon={<EditIcon />}>
                    Comment
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}

{
  /* <Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>

<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box>
<Box bg="white" h="200px" border={"1px solid"}></Box> */
}
export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
