import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/photo-of-me.jpg"

const greeting = "Hello, I am Kelley!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
    color="#18181b"
  >
    <VStack>
      <Avatar size='2xl' name='Kelley' src={portrait} />
      <Heading as='h4'size='md' paddingBottom='20px'>{greeting}</Heading>
      <Heading as='h1' size='2xl'>{bio1}</Heading>
      <Heading as='h1' size='2xl'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
