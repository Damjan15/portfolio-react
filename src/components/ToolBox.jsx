import {  HStack, IconButton, Text, Heading, Box, Icon } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const ToolBox = ({ icon, title, description }) => {
  const bg = useColorModeValue("white", "#242d3d")
  const border = useColorModeValue("gray.300", "#242d3d")

  return <HStack border="1px" borderColor={border} background={bg} role="group" w={{ base: "full", md: "45%"}} spacing={5} p={3} mr={3} mb={3} cursor="pointer" _hover={{ borderColor: "blue.400"}} rounded="md">
    <Box>
      <IconButton icon={<Icon as={icon} />} _groupHover={{ bg: "blue.400", color: "white"}} />
    </Box>
    <Box>
      <Heading as="h3" fontSize="xl" _groupHover={{ color: "blue.400"}}>{title}</Heading>
      <Text>{description}</Text>
    </Box>
</HStack>;
};

export default ToolBox;
