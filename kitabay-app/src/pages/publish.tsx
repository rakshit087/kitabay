import { Box, VStack } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { Introduction } from '@/modules/Publish/components/Introduction';
import { Title } from '@/modules/Publish/components/Title';
import { Description } from '@/modules/Publish/components/Description';
import { Tokenomics } from '@/modules/Publish/components/Tokenomics';
import { BookCover } from '@/modules/Publish/components/BookCover';
import { BookContent } from '@/modules/Publish/components/BookContent';
import { Formik } from 'formik';

const montserrat = Montserrat({ subsets: ['latin'] });

const Publish = () => {
  const { user } = useContext(AuthContext);
  return (
    <Formik
      initialValues={{
        title: '',
        author: user?.name || '',
        description: '',
        copies: 0,
        price: 0,
        bookCover: '',
        bookContent: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, touched, values }) => (
        <Box
          w={'full'}
          h={'100vh'}
          overflowY={'scroll'}
          scrollSnapType={'y mandatory'}
          scrollBehavior={'smooth'}
        >
          <Introduction />
          <Title
            errors={errors}
            touched={touched}
          />
          <Description
            errors={errors}
            touched={touched}
          />
          <Tokenomics 
            errors={errors}
            touched={touched}
          />
          <BookCover />
          <BookContent />
        </Box>
      )}
    </Formik>
  );
};

export default Publish;
