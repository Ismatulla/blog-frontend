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
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../../assets/navlogo.svg";
import user from "../../assets/user.jpg";
import CreatePost from "../components/modals/CreatePost";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const profiles: string[] = [
    "Profile",
    "New Post",
    "Change Password",
    "Edit Profile",
    "Login",
    "Forgot Password",
    "Logout",
  ];
  const handleClickNavbar = (text: string) => {
    if (text === "New Post") {
      onOpen();
    }
  };
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
      top={0}
      background="#fff">
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
        <Input
          placeholder="Search topic here ..."
          background="#f2f2f2"
          _placeholder={{ color: "brand.700" }}
          minWidth="20rem"
          fontFamily="cursive"
          fontSize="1.8rem"
          padding="2rem"
        />
        <Menu>
          <MenuButton
            as={Button}
            backgroundColor="white"
            _hover={{ backgroundColor: "white" }}
            _active={{ backgroundColor: "white" }}>
            <img src={user} width="60px" alt="user" />
          </MenuButton>
          <MenuList fontFamily="Roboto" fontSize="1.8rem">
            {profiles.map((profile, index) => (
              <MenuItem key={index} onClick={() => handleClickNavbar(profile)}>
                {profile}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <CreatePost isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Navbar;
