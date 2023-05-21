import { Button, Flex, Link, Text } from '@chakra-ui/react';
export const Description = () => {
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="description"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Describe your Kitab 
        <br />
        with Kitabay.
      </Text>
      <Text fontSize={'xl'}>
        Tell us about your book. <br /> 
      </Text>
      <Link href="#title">
        <Button
          mt={12}
          colorScheme={'teal'}
          size={'lg'}
        >
          Continue
        </Button>
      </Link>
    </Flex>
  );
};
