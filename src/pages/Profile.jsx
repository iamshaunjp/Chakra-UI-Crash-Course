import {
  ListIcon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  ChatIcon,
  EmailIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"} />
                Lorem ipsum dolor sit amet, consectetur adipisicing.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
