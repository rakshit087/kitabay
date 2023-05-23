import { Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import { Field } from 'formik';

export const Tokenomics = () => {
  return (
    <Flex
      height={'100%'}
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
      <Field
        as={Input}
        id="copies"
        name="copies"
        type="number"
        variant="flushed"
        width={'100%'}
        mt={12}
        placeholder={'Enter the no of copies you want to sell'}
      />
      <Field
        as={Input}
        id="price"
        name="price"
        type="number"
        variant="flushed"
        width={'100%'}
        mt={12}
        placeholder={'Enter the price of your book'}
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
