import { ListIcon, Tab, TabList, TabPanel, TabPanels, Tabs, List, ListItem } from "@chakra-ui/react";
import { ChatIcon, EmailIcon } from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon}/>
              Email: mario@netninja.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
