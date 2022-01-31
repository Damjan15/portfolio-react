import {  Flex, Heading, VStack } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiReact } from "react-icons/di"
import { SiJavascript, SiNextdotjs, SiPhp, SiSymfony, SiMysql, SiMongodb } from "react-icons/si"
import Skill from "./Skill";

const SkillsBox = () => {
  return (
    <VStack alignItems="flex-start" spacing={8}>
      <Heading as="h2" fontSize="3xl" fontWeight="500">
        💻 Stacks & Technologies
      </Heading>
      
      <Flex w="full" flexWrap="wrap">
          <Skill title="HTML" icon={AiFillHtml5} />
          <Skill title="CSS" icon={DiCss3} />
          <Skill title="JavaScript" icon={SiJavascript} />
          <Skill title="React" icon={DiReact} />
          <Skill title="Next" icon={SiNextdotjs} />
          <Skill title="PHP" icon={SiPhp} />
          <Skill title="Symfony" icon={SiSymfony} />
          <Skill title="MySQL" icon={SiMysql} />
          <Skill title="MongoDB" icon={SiMongodb} />
      </Flex>
    </VStack>
  );
};

export default SkillsBox;
