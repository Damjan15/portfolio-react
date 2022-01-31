import { Box, VStack } from '@chakra-ui/layout';
import React from 'react';
import IntroBox from '../components/IntroBox';
import ProjectsBox from '../components/ProjectsBox';
import TechnologiesBox from '../components/TechnologiesBox';

const Home = () => {
  return <Box maxW="3xl" mx="auto" mt={10}>
      <VStack alignItems="flex-start" spacing={12}>
      <IntroBox />
      <ProjectsBox />
      <TechnologiesBox />
      </VStack>
  </Box>;
};

export default Home;
