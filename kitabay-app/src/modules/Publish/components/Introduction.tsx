import { Button, Flex, Link, Text, ListItem, UnorderedList } from '@chakra-ui/react';
export const Introduction = () => {
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="introduction"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={[8, null, 12]}
      >
        Publish Your Book
        <br />
        with Kitabay.
      </Text>
      <Text
        fontSize={['md', null, 'xl']}
        mb={4}
      >
        Set a price, decide on number of copies you want in the market <br /> and let people enjoy your piece of art.
      </Text>
      <Text fontSize={['md', null, 'xl']}>
        The books you publish will be available for purchase on the Kitabay marketplace as an NFT.
      </Text>
      <UnorderedList
        mt={4}
        pl={[4, null, 8]}
        fontSize={['sm', null, 'lg']}
      >
        <ListItem>
          <Text>A user with your book's NFT will have access to book's content.</Text>
        </ListItem>
        <ListItem>
          <Text>You are free to decide the number of copies and the price of the book.</Text>
        </ListItem>
        <ListItem>
          <Text>
            You will get 100% of the revenue from the sale of the book.
          </Text>
        </ListItem>
        <ListItem>
          <Text>User are free to trade, resale or gift the NFT just like a physical book.</Text>
        </ListItem>
        <ListItem>
          <Text>If a book is resaled, you will get 10% as the author of the book.</Text>
        </ListItem>
      </UnorderedList>

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
