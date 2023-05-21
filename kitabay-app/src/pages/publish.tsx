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

const montserrat = Montserrat({ subsets: ['latin'] });

const Publish = () => {
  const { user } = useContext(AuthContext);
  return (
      <Box
        w={'full'}
        h={"100vh"}
        overflowY={'scroll'}
        scrollSnapType={'y mandatory'}
        scrollBehavior={'smooth'}
      >
        <Introduction />
        <Title />
        <Description />
        <Tokenomics />
        <BookCover />
        <BookContent />
      </Box>
  );
};

export default Publish;
