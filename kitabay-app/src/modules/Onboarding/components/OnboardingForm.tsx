import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
import { Field } from 'formik';

interface OnboardingFormProps {
  handleSubmit: () => void;
  errors: any;
  touched: any;
}

export const OnboardingForm = (props: OnboardingFormProps) => {
  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
      height={'24rem'}
    >
      <Text
        fontSize={['md', 'lg', 'xl']}
        textAlign={'center'}
        fontWeight={'semibold'}
      >
        First let's set up your account
      </Text>
      <VStack
        spacing={4}
        align="flex-start"
        width={'100%'}
        marginTop={8}
      >
        <FormControl isInvalid={!!props.errors.name && props.touched.name}>
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <Field
            as={Input}
            id="name"
            name="name"
            type="text"
            variant="outline"
            validate={(value: any) => {
              let error;
              if (!value) {
                error = 'Name is required';
              }
              return error;
            }}
            width={'100%'}
          />
          <FormErrorMessage>{props.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="avatar">Avatar URL</FormLabel>
          <Field
            as={Input}
            id="avatar"
            name="avatar"
            type="text"
            variant="outline"
            width={'100%'}
          />
        </FormControl>
      </VStack>
    </Flex>
  );
};
