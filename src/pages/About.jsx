import { Box, Heading, Text, Stack, Badge } from "@chakra-ui/react";

const About = () => {
  return (
    <Box maxW="3xl" mx="auto" mt={10} p={4}>
      <Heading as="h2" fontSize={{ base: "2xl", md: "4xl"}} fontWeight="500" mb={4}>
        About
      </Heading>
      <Text fontSize={{ base: "18px", md: "22px"}}>
        After finishing High School, I decided to join the Front-End Web
        Development Academy in Brainster. For those 8 months, I focused more on
        front-end technologies because I wanted to become more proficient and
        really understand how stuff works. But after that my curiosity got the
        best of me, and I started to dabble in back-end technologies in my free
        time. After some time I got my first job as a Full Stack Developer at
        PeopleWeek, where I could finally get the proper mentorship and help
        while simultaneously learning new stuff. In my free time, I want to hang
        out with friends, workout, read a book about something that I’m
        interested in, and usually do a couple of exercises on TryHackMe which I
        took interest in recently. I like to change my perspective once in a
        while when writing code and put myself in Red Teamer's shoes ( the
        person who tries to break your application and find bugs. ). That’s why
        I started self-educating myself on TryHackMe about recent
        vulnerabilities in web applications and what measures you can take to
        protect your own.
      </Text>

      <Stack direction={{ base: "row"}} alignItems="flex-start" spacing={10} mt={12}>

        <Box>
          <Heading as="h2" fontSize="3xl" my={4}>Yay</Heading>

          <Stack direction={{ base: "column", md: "row"}}>
            <Badge colorScheme="green" p={2} rounded="md">React</Badge>
            <Badge colorScheme="green" p={2} rounded="md">Javascript</Badge>
            <Badge colorScheme="green" p={2} rounded="md">Webtoons</Badge>
            <Badge colorScheme="green" p={2} rounded="md">Movies</Badge>
            <Badge colorScheme="green" p={2} rounded="md">TV Shows</Badge>
            <Badge colorScheme="green" p={2} rounded="md">Coffee</Badge>
          </Stack>
        </Box>

        <Box>
          <Heading as="h2" fontSize="3xl" my={4}>Nay</Heading>

          <Stack direction={{ base: "column", md: "row"}}>
            <Badge colorScheme="red" p={2} rounded="md">JQuery</Badge>
            <Badge colorScheme="red" p={2} rounded="md">Narrow-minded</Badge>
            <Badge colorScheme="red" p={2} rounded="md">Burning Out</Badge>
            <Badge colorScheme="red" p={2} rounded="md">Politics</Badge>
          </Stack>
        </Box>
      </Stack>

    </Box>
  );
};

export default About;
