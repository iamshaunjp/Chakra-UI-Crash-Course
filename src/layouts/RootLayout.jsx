import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}

      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1}}
        bg="purple.400"
        minHeight={{lg: "100vh"}}
        p={{base: '20px', lg: '30px'}}
      >
        <span>sidebar</span>
      </GridItem>

      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5}}
        p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
