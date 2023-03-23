import { Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()
  return (
		<SimpleGrid  spacing={10} minChildWidth="300px">
			{tasks && tasks.map(task => (
        <Card key={task.id}>
          <CardHeader>
            <Text>card header</Text>
          </CardHeader>
        <CardBody>
          <Text>
            {task.description}
          </Text>
        </CardBody>
        <CardFooter>
          <Text></Text>
        </CardFooter>
          
        </Card>
      ))}
		</SimpleGrid>
	);
}

export const tasksLoader = async() => {
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}