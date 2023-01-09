import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan="1"
        bg="purple.400"
        minHeight="100hv"
        p="30px"
      >
        <span>sidebar</span>
      </GridItem>

      {/* main content & navbar */}
      <GridItem
        as="main"
        colSpan="5"
        p="40px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
