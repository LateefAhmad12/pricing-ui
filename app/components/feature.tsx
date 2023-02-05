import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'md'}>
      {children}
    </Text>
  );
};

// const TestimonialAvatar = ({
//   src,
//   name,
//   title,
// }: {
//   src: string;
//   name: string;
//   title: string;
// }) => {
//   return (
//     <Flex align={'center'} mt={8} direction={'column'}>
//       <Stack spacing={-1} align={'center'}>
//         <Text fontWeight={600}>{name}</Text>
//         <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
//           {title}
//         </Text>
//       </Stack>
//     </Flex>
//   );
// };

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Available Programs</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Artificial Intelligence</TestimonialHeading>
              <TestimonialText>
              A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE OF AI.
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Cloud Native and Mobile Web Computing Specialist</TestimonialHeading>
              <TestimonialText>
              A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>BLOCKCHAIN SPECIALIST</TestimonialHeading>
              <TestimonialText>
              A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING
            PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
              </TestimonialText>
            </TestimonialContent>

        
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}