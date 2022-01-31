import { Box, Flex, IconButton, Image, Button, ButtonGroup } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import profile from "../assets/profile-image.jpg";

const Navbar = () => {
  return (
    <Box bg="white" p={3} position="sticky" zIndex="99">
      <Flex justifyContent="space-evenly" maxW="7xl" mx="auto">
        <Box>
          <Link to="/">
            <Image
              src={profile}
              w={9}
              h={9}
              rounded="full"
              objectFit="contain"
            />
          </Link>
        </Box>

        <ButtonGroup spacing={{ base: 0, md: 6 }}>
          <Button variant="ghost">
            <Link to="/about">About</Link>
          </Button>

          <Button variant="ghost">
            <Link to="/tools">Tools</Link>
          </Button>

          <Button variant="ghost">
            <Link to="/books">Books</Link>
          </Button>
        </ButtonGroup>

        <IconButton icon={<MoonIcon />} aria-label="Toggle Dark Mode" />
      </Flex>
    </Box>
  );
};

export default Navbar;
