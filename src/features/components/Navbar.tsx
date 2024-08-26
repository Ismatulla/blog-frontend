import {
  Box,
  Button,
  Container,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/navlogo.svg";
import user from "../../assets/user.jpg";
const Navbar = () => {
  return (
    <Container
      maxWidth={"container.xl"}
      pt={4}
      pb={4}
      display={"flex"}
      justifyContent="space-between"
      position="sticky"
      borderBottom={"0.5px solid"}
      borderColor="brand.700"
      alignItems="center"
      top={0}>
      <Box display="flex" alignItems="center" gap={4}>
        <img src={logo} width="48px" alt="logo" />
        <Text
          fontFamily="cursive"
          fontSize="24px"
          fontWeight={700}
          color={"brand.700"}>
          Blog
        </Text>
      </Box>
      <Box display={"flex"} alignItems="center" gap={4}>
        {" "}
        <Input placeholder="Search topic here ..." />
        <Menu>
          <MenuButton
            as={Button}
            backgroundColor="white"
            _hover={{ backgroundColor: "white" }}
            _active={{ backgroundColor: "white" }}>
            <img src={user} width="60px" alt="user" />
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Container>
  );
};

export default Navbar;
