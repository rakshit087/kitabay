import { Box, Button, Flex, Text } from '@chakra-ui/react';
import lighthouse from '@lighthouse-web3/sdk';
import { useRouter } from 'next/router';
import { useShowErrorToast } from '@/hooks/showErrorToast';
import { useState } from 'react';

export const BookCover = (props: {
  setFieldValue: (field: string, value: any) => void;
  handleSubmit: () => void;
  errors: any;
}) => {
  const router = useRouter();
  const { setErrorMessage } = useShowErrorToast();
  const [uploading, setUploading] = useState<boolean>(false);
  return (
    <Flex
      height={'100%'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="cover"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Uploading Cover of your Kitab
      </Text>
      <Text
        fontSize={['lg', null, 'xl']}
        lineHeight={1.3}
      >
        The cover of your Kitab is the first thing people will see when they find it on Kitabay. Make sure it stands
        out! <br />
        This cover will also be a part of NFT&apos;s metadata.
      </Text>
      <Box my={12}>
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            setUploading(true);
            const cidData: any = await lighthouse.upload(e, process.env.NEXT_PUBLIC_LH_ENDPOINT || '');
            console.log(cidData);
            props.setFieldValue('bookCover', cidData.data.Hash);
            setUploading(false);
          }}
        />
      </Box>
      <Button
        colorScheme={'teal'}
        size={'lg'}
        onClick={() => {
          if (props.errors.title) {
            setErrorMessage(props.errors.title);
            router.push('#title');
          } else if (props.errors.description) {
            setErrorMessage(props.errors.description);
            router.push('#description');
          } else if (props.errors.copies) {
            setErrorMessage(props.errors.copies);
            router.push('#tokenomics');
          } else if (props.errors.price) {
            setErrorMessage(props.errors.price);
            router.push('#tokenomics');
          } else if (props.errors.bookCover) {
            setErrorMessage(props.errors.bookCover);
            router.push('#cover');
          } else {
            props.handleSubmit();
          }
        }}
        isLoading={uploading}
        isDisabled={uploading}
        w={'12rem'}
      >
        Make your Kitab
      </Button>
    </Flex>
  );
};
