import {  HStack, IconButton, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'

const Skill = ({ icon, title }) => {
  return <HStack border="1px" borderColor="gray.500" w={{ base: "full", md: "30%"}} spacing={4} py={4} px={6} rounded="md" cursor="pointer" mb={5} mr={3} _hover={{ borderColor: "blue.400"}} role="group">
    <IconButton icon={<Icon as={icon} _groupHover={{ color: "blue.400"}} />} variant="solid" bg="gray.200" />
    <Text fontWeight="500">{title}</Text>
  </HStack>;
};

export default Skill;
