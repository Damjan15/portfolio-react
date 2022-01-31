import { Button } from "@chakra-ui/button";
import { Box, Heading, Text, VStack } from "@chakra-ui/layout";

const ProjectsBox = () => {
  return <Box>
      <Heading as="h2" fontSize="3xl" fontWeight="500" mb={4}>Projects</Heading>

      <VStack bg="white" p={5} border="1px solid gray.100" rounded="md" spacing={5}>
          <Heading as="h3" fontSize="xl">Coming Soon...</Heading>
          <Text>Currently I'm working on multiple projects. You can check out my Github Repo to track my progress and see what I'm working on.</Text>
          <Button w="full">Github</Button>
      </VStack>
  </Box>;
};

export default ProjectsBox;
