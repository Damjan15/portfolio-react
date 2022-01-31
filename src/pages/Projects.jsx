import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons"
import { AiFillGithub } from "react-icons/ai"
import { useColorModeValue } from "@chakra-ui/color-mode";

const Projects = () => {
  const bg = useColorModeValue("white", "#242d3d")
  const border = useColorModeValue("gray.100", "#242d3d")

  return (
    <Box maxW="3xl" mx="auto" mt={20} p={3} id="projects">
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl"}} fontWeight="500" mb={5}>
        💻 Projects
      </Heading>

      <VStack
        bg={bg}
        p={5}
        border="1px"
        borderColor={border}
        rounded="md"
        spacing={5}
      >
        <Heading as="h3" fontSize="xl">
          Coming Soon...
        </Heading>
        <Text>
          Currently I'm working on multiple projects. You can check out my
          Github Repo to track my progress and see what I'm working on.
        </Text>
        <Button leftIcon={<Icon as={AiFillGithub} />} colorScheme="blue">Github</Button>
      </VStack>
    </Box>
  );
};

export default Projects;
