import React from 'react'
import { 
  ScrollView, 
  Box, 
  Text, 
  VStack, 
  Icon, 
  Image, 
  useColorModeValue 
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import NavBar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox 
      flex={1} 
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.jpg')}
      >
        <NavBar />
      </Masthead>
      <ScrollView 
        borderTopLeftRadius="20px" 
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image 
              source={require('../assets/profile-image.jpg')} 
              borderRadius="full"
              w={120}
              h={120}
              alt="DabAZ"
            />
            <Text fontSize="md" w="full" pt={6}>
              AiryToDo is a minimal app for recording daily to-do. Here are some of my contacts:
            </Text>
            <LinkButton 
              colorScheme="blue"
              size="lg"
              borderRadius="full"
              w="full"
              my={4}
              href="https://twitter.com/dabaz_official"
              leftIcon={
                <Icon
                  as={ Feather }
                  name="twitter"
                  size="sm"
                  opacity={0.7}
                />}>
                  @dabaz_official
            </LinkButton>
            <LinkButton 
              colorScheme="coolGray"
              size="lg"
              borderRadius="full"
              w="full"
              mb={4}
              href="https://github.com/dabaz-official"
              leftIcon={
                <Icon
                  as={ Feather }
                  name="github"
                  size="sm"
                  opacity={0.7}
                />}>
                  @dabaz-official
            </LinkButton>
            <Text fontSize="md" mb={4} w="full">
              To learn more, please visit the website.
            </Text>
            <LinkButton 
              colorScheme="purple"
              size="lg"
              borderRadius="full"
              w="full"
              href="https://airytodo.dabaz.me"
              leftIcon={
                <Icon
                  as={ Feather }
                  name="external-link"
                  size="sm"
                  opacity={0.7}
                />}>
                  AiryToDo Website
            </LinkButton>
          </Box>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen