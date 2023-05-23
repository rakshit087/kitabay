import { Button, Flex, Link, Text, Textarea } from '@chakra-ui/react';
import { Field } from 'formik';

export const Description = () => {
  return (
    <Flex
      height={'100%'}
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
        Write a short summary of your book. <br /> This will be displayed on the marketplace and as NFT&apos;s metadata.
      </Text>
      <Field
        as={Textarea}
        id="description"
        name="description"
        type="text"
        variant="flushed"
        width={'100%'}
        mt={12}
        placeholder={'Enter the description of your book'}
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
