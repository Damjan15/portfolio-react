import { Box, Heading, Text, VStack, ButtonGroup, Button, Link } from '@chakra-ui/react';
import { AiFillLinkedin } from "react-icons/ai"
import { EmailIcon } from "@chakra-ui/icons"

const IntroBox = () => {
  return <Box>
      <VStack alignItems="flex-start"  spacing={4}>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl"}} fontWeight="500">Hey, I'm Damjan 👋</Heading>
          <Text fontSize={{ base: "18px", md: "23px"}}>I’m a full stack developer, and cyber security enthusiast. I’m born and raised in Macedonia. I finished my academy for Front-End Development in 2020, and I had a chance to learn back-end technologies and work with them on my first job. </Text>

          <ButtonGroup>
            <Button colorScheme="blue" leftIcon={<EmailIcon />}>
              <Link href="mailto:stamenovdamjan20@gmail.com">
              Send me an email
              </Link>
              </Button>
            <Button colorScheme="blue" leftIcon={<AiFillLinkedin />} >
              <Link href="https://www.linkedin.com/in/damjan-stamenov-a424951b8" _hover={{ textDecor: "none"}} target="_blank">LinkedIn</Link>
            </Button>
          </ButtonGroup>
      </VStack>
  </Box>;
};

export default IntroBox;
