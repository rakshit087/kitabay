import { Button, Flex, FormControl, Input, Link, Text } from '@chakra-ui/react';
import { Field } from 'formik';
export const Title = (props: { errors: any; touched: any }) => {
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
      <FormControl isInvalid={!!props.errors.name && props.touched.name}>
        <Field
          as={Input}
          id="title"
          name="title"
          type="text"
          variant="flushed"
          validate={(value: any) => {
            let error;
            if (!value) {
              error = 'Title is required';
            }
            return error;
          }}
          width={'100%'}
          mt={12}
          placeholder={'Enter the title of your book'}
        />
      </FormControl>
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
