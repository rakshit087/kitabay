import { Button, Flex, Input, Link, Text } from '@chakra-ui/react';
export const Title = () => {
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="title"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Title of your Kitab (book)
      </Text>
      <Text fontSize={'xl'}>
       What is your book called? <br /> This will also serve as the title of your Book's NFT (non-fungible token).
      </Text>
      <Input placeholder="Enter title" variant={'flushed'} _placeholder={{ fontSize: 'xl' }} mt={12} />
      <Link href="#description">
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
