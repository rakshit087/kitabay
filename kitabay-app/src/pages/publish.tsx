import { useContext, useEffect, useState } from 'react';
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
import { deployNFT } from '@/modules/Publish/services/deployNFT';
import { useShowErrorToast } from '@/hooks/showErrorToast';
import { useShowSuccessToast } from '@/hooks/showSuccessToast';
import { useRouter } from 'next/router';

const Publish = () => {
  const { user } = useContext(AuthContext);
  const { setLoader } = useContext(loadingContext);
  const router = useRouter();
  const [contractAddress, setContractAddress] = useState('');
  const { setSuccessMessage } = useShowSuccessToast();
  const { setErrorMessage } = useShowErrorToast();
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
          const res = await uploadNFTMetadata({
            name: values.title,
            description: values.description,
            image: values.bookCover,
          });
          setLoader(true, 'Deploying NFT Contract...');
          try {
            const deployedAddress = await deployNFT(
              values.title,
              values.title.slice(0, 5).toUpperCase(),
              'https://gateway.lighthouse.storage/ipfs/' + res.data.cid,
              values.copies,
              values.price
            );
            setContractAddress(deployedAddress);
            setSuccessMessage('NFT Contract deployed successfully at ' + deployedAddress);
            setLoader(false, '');
            router.push('#content');
          } catch (error) {
            setErrorMessage('Error while deploying NFT Contract');
            setLoader(false, '');
          }
        }}
        validationSchema={KitabFormSchema}
      >
        {({ handleSubmit, errors, setFieldValue, values }) => (
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
            {contractAddress && (
              <BookContent
                contractAddress={contractAddress}
                values={values}
              />
            )}
          </>
        )}
      </Formik>
    </Box>
  );
};

export default Publish;
