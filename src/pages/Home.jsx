import { Box, VStack } from "@chakra-ui/react";
import IntroBox from "../components/IntroBox";
import SkillsBox from "../components/SkillsBox";

const Home = () => {
  return (
    <Box maxW="3xl" mx="auto" mt={10}>
      <VStack alignItems="flex-start" spacing={12} p={3}>
        <IntroBox />
        <SkillsBox />
      </VStack>
    </Box>
  );
};

export default Home;
