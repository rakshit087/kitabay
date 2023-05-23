import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { loadingContext } from '@/contexts/loadingContext';
import { useShowErrorToast } from '@/hooks/showErrorToast';
import { useShowSuccessToast } from '@/hooks/showSuccessToast';
import { useContext } from 'react';
import { uploadFileEncrypted, applyAccessControl } from '../services/contentUploader';
import { db } from '@/config/poybase.config';
import { useAccount } from 'wagmi';

export const BookContent = ({ contractAddress, values }: { contractAddress: string; values: any }) => {
  const { setLoader } = useContext(loadingContext);
  const { setSuccessMessage } = useShowSuccessToast();
  const { setErrorMessage } = useShowErrorToast();
  const { address } = useAccount();
  const [cid, setCid] = useState('');

  return (
    <Flex
      height={'100%'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="content"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Uploading Content of your Kitab
      </Text>
      <Text
        fontSize={['lg', null, 'xl']}
        lineHeight={1.3}
      >
        Upload the content of your Kitab in PDF format. <br />
        This content will be accessable to the readers who buy your Kitab NFT.
      </Text>
      <Box my={12}>
        <input
          type="file"
          accept="application/pdf"
          onChange={async (e) => {
            setLoader(true, "Uploading your Kitab's content");
            const cidData: any = await uploadFileEncrypted(e);
            console.log('cid data', cidData);
            setLoader(true, "Encrypting your Kitab's content");
            const encryptedCidData = await applyAccessControl(cidData.data.Hash, contractAddress);
            setCid(encryptedCidData.data.cid);
            setSuccessMessage('Your Kitab content uploaded successfully');
            setLoader(false, '');
          }}
        />
      </Box>
      <Button
        colorScheme={'teal'}
        size={'lg'}
        onClick={async () => {
          setLoader(true, 'Finalizing your Kitab...');
          await db
            .collection('Kitab')
            .create([
              contractAddress,
              values.title,
              values.description,
              values.author,
              values.bookCover,
              values.copies,
              values.price,
              address,
              cid,
            ]);
          setSuccessMessage('Your Kitab is published successfully');
          setLoader(false, '');
        }}
        isDisabled={!cid}
      >
        Finish
      </Button>
    </Flex>
  );
};
