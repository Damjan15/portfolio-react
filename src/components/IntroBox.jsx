import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

const IntroBox = () => {
  return <Box>
      <VStack alignItems="flex-start"  spacing={4}>
          <Heading as="h2" fontSize="3xl" fontWeight="500">Hey, I'm Damjan 👋</Heading>
          <Text fontSize="23px">I’m a full stack developer, and cyber security enthusiast. I’m born and raised in Macedonia. I finished my academy for Front-End Development in 2019, and I had a chance to learn back-end technologies and work with them on my first job. </Text>
      </VStack>
  </Box>;
};

export default IntroBox;
