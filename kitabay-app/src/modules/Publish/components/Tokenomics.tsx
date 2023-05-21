import { Button, Flex, Input, Link, Text } from '@chakra-ui/react';
export const Tokenomics = () => {
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="tokenomics"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Let's work on the tokenomics of your Kitab
      </Text>
      <Text
        fontSize={'xl'}
        mb={4}
      >
        Here you can decide the number of copies you want to sell and the price of the book token. <br />
        Remeber the more rare the book is the more valuable it is.
      </Text>
      <Input
        placeholder="Enter the no of copies you want to sell"
        variant={'flushed'}
        _placeholder={{ fontSize: 'xl' }}
        mt={12}
      />
      <Input
        placeholder="Enter the price of the book token in FIL"
        variant={'flushed'}
        _placeholder={{ fontSize: 'xl' }}
        mt={12}
      />
      <Link href="#cover">
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
