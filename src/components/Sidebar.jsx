import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"


export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="create">
          <ListIcon as={EditIcon} color="white" />
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  )
}
