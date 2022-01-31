import {  HStack, IconButton, Text, Heading, Box, Icon } from '@chakra-ui/react';

const ToolBox = ({ icon, title, description }) => {
  return <HStack border="1px" borderColor="gray.300" background="white" role="group" w="sm" spacing={5} p={3} mr={3} mb={3} cursor="pointer" _hover={{ borderColor: "blue.400"}}>
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
