import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: 'center',
    ':hover': {
      color: 'black',
    },
    filter: 'blur(2px)'
    
  }
  /*In Chakra UI, the "sx" prop refers to the custom style object that can be used to apply additional styles or override default styles of components. The "sx" property allows you to write inline styles in a simpler syntax than traditional CSS. You can use this to apply various styles to the component, such as color, margin, padding, height, width and other styles.

In the code you provided, the "sx" prop is used to apply custom styles to the Box component. The "boxStyles" object contains various properties such as padding, background color, margin, textAlign, hover etc that has been passed to sx. This allows for easy customization of the Box component. */

  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">Chakra UI Components</Heading>

      <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima impedit inventore facilis amet, doloremque repellat dicta officia</Text>

      <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima impedit inventore facilis amet, doloremque repellat dicta officia</Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a Box</Text>
      </Box>

      <Box sx={boxStyles}>Hello, Ninjas!</Box>
    </Container>
  )
}
