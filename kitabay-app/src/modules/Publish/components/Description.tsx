import { Button, Flex, Link, Text, Textarea } from '@chakra-ui/react';
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
      </Text>
      <Text fontSize={'xl'}>
        Write a short summary of your book. <br /> This will be displayed on the marketplace and as NFT's metadata.
      </Text>

      <Textarea
        placeholder="Enter title"
        variant={'flushed'}
        _placeholder={{ fontSize: 'xl' }}
        mt={12}
      />
      <Link href="#tokenomics">
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
