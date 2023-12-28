import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple">
      <TabList>
        <Tab>Account Info</Tab>
        <Tab>Task History</Tab>
      </TabList>

      <TabPanels>

      </TabPanels>
    </Tabs>
  )
}
