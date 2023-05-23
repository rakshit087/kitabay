import { useContext, useEffect } from 'react';
import { Formik } from 'formik';
import { Box } from '@chakra-ui/react';
import { KitabFormSchema } from '@/modules/Publish/validation/kitabFormSchema';
import { AuthContext } from '@/contexts/authContext';
import { loadingContext } from '@/contexts/loadingContext';
import { Introduction } from '@/modules/Publish/components/Introduction';
import { Title } from '@/modules/Publish/components/Title';
import { Description } from '@/modules/Publish/components/Description';
import { Tokenomics } from '@/modules/Publish/components/Tokenomics';
import { BookCover } from '@/modules/Publish/components/BookCover';
import { BookContent } from '@/modules/Publish/components/BookContent';
import { uploadNFTMetadata } from '@/modules/Publish/services/uploadNFTMetadata';
import { useContractWrite, useWaitForTransaction } from 'wagmi';
import { useToast } from '@chakra-ui/react';
import KitabFactory from '@/abi/KitabFactory.json';

const Publish = () => {
  const { user } = useContext(AuthContext);
  const { setLoader } = useContext(loadingContext);
  const toast = useToast();
  const { data, write, isError } = useContractWrite({
    address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    abi: KitabFactory,
    functionName: 'createKitab',
  });
  const { isSuccess, data: contractAddress } = useWaitForTransaction({hash: data?.hash});
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      console.log(contractAddress);
      toast({
        title: 'NFT Contract deployed successfully!',
        description: 'Your NFT Contract has been deployed at' + data,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setLoader(false, '');
    }
    if (isError) {
      toast({
        title: 'Error',
        description: 'Something went wrong!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoader(false, '');
    }
  }, [isSuccess, isError]);

  return (
    <Box
      w={'full'}
      h={'100vh'}
      overflowY={'scroll'}
      scrollSnapType={'y mandatory'}
      scrollBehavior={'smooth'}
    >
      <Formik
        initialValues={{
          title: '',
          author: user?.name || '',
          description: '',
          copies: 0,
          price: 0,
          bookCover: '',
        }}
        onSubmit={async (values) => {
          setLoader(true, 'Uploading NFT metadata to IPFS...');
          console.log(values);
          const res = await uploadNFTMetadata({
            name: values.title,
            description: values.description,
            image: values.bookCover,
          });
          setLoader(true, 'Deploying NFT Contract...');
          write({
            args: [
              values.title,
              values.title.slice(0, 5).toUpperCase(),
              'https://gateway.lighthouse.storage/ipfs/' + res.data.Hash,
              values.copies,
              values.price,
            ],
          });
        }}
        validationSchema={KitabFormSchema}
      >
        {({ handleSubmit, errors, setFieldValue }) => (
          <>
            <Introduction />
            <Title />
            <Description />
            <Tokenomics />
            <BookCover
              handleSubmit={handleSubmit}
              setFieldValue={setFieldValue}
              errors={errors}
            />
          </>
        )}
      </Formik>
      <BookContent />
    </Box>
  );
};

export default Publish;
