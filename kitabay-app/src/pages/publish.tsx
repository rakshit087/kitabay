import { useContext } from 'react';
import { Formik } from 'formik';
import { Box } from '@chakra-ui/react';
import { KitabFormSchema } from '@/modules/Publish/validation/kitabFormSchema';
import { AuthContext } from '@/contexts/authContext';
import { Introduction } from '@/modules/Publish/components/Introduction';
import { Title } from '@/modules/Publish/components/Title';
import { Description } from '@/modules/Publish/components/Description';
import { Tokenomics } from '@/modules/Publish/components/Tokenomics';
import { BookCover } from '@/modules/Publish/components/BookCover';
import { BookContent } from '@/modules/Publish/components/BookContent';

const Publish = () => {
  const { user } = useContext(AuthContext);
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
        onSubmit={(values) => {
          console.log(values);
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
