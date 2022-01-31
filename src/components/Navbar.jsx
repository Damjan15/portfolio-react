import { Box, Flex, IconButton, Image, Button, ButtonGroup } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import profile from "../assets/profile-image.jpg";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue("white", "#242d3d")


  return (
    <Box bg={bg} p={3}>
      <Flex justifyContent="space-evenly" maxW="7xl" mx="auto">
        <Box>
            <Image
              src={profile}
              w={9}
              h={9}
              rounded="full"
              objectFit="contain"
            />
        </Box>

        <ButtonGroup spacing={{ base: 0, md: 6 }}>
          <Button variant="ghost">
            About
          </Button>

          <Button variant="ghost">
            Tools
          </Button>

          <Button variant="ghost">
            Projects
          </Button>
        </ButtonGroup>

        <IconButton icon={ colorMode === "light" ? <MoonIcon /> : <SunIcon />} aria-label="Toggle Dark Mode" onClick={toggleColorMode} />
      </Flex>
    </Box>
  );
};

export default Navbar;
