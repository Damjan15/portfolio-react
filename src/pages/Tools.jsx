import { Box, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import { SiVisualstudiocode, SiFirefox, SiNotion, SiCodecademy, SiTryhackme, SiGrammarly } from "react-icons/si"
import ToolBox from "../components/ToolBox";

const Tools = () => {
  return (
    <Box mt={20} maxW="3xl" mx="auto" p={3}>
      <VStack alignItems="flex-start" spacing={3} mb={5}>
        <Heading as="h2" fontSize={{ base: "2xl", md: "3xl"}}>
          🛠
          Tools
        </Heading>
        <Text fontSize="20px">A list of tools I use on a regular basis</Text>
      </VStack>

      <Flex flexWrap="wrap">
        <ToolBox icon={SiVisualstudiocode} title="Visual Studio Code" description="Code editor of choice" />
        <ToolBox icon={SiFirefox} title="Firefox" description="Browser of choice" />
        <ToolBox icon={SiNotion} title="Notion" description="Productivity tool of choice" />
        <ToolBox icon={SiCodecademy} title="Codecademy" description="Platform for learning code" />
        <ToolBox icon={SiTryhackme} title="TryHackMe" description="Platform for learning cybersecurity" />
        <ToolBox icon={SiGrammarly} title="Grammarly" description="Live writing assistence" />
      </Flex>
    </Box>
  );
};

export default Tools;
