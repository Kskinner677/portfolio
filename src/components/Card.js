import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
        <VStack
          borderRadius='lg'
          backgroundColor='white'
          color="black"
          >
          <Image 
            src={imageSrc}
            objectFit='cover'
            borderRadius='lg'
            alt={title}
          />
          <VStack
            alignItems="flex-start"
            padding='20px'
          >
            <Heading 
              as='h4'
              size='md'
            >
              {title}
            </Heading>

            <Text
              fontSize='md'
              color='#3182CE'
              >
              {description}
            </Text>

            <Text 
              fontSize='md'
              >
                See more {<FontAwesomeIcon icon={faArrowRight} size="1x"/>}
            </Text>
          </VStack>
        </VStack>
    </HStack>
  );
};

export default Card;
