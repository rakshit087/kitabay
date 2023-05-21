import { Box, VStack } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { Introduction } from '@/modules/Publish/components/Introduction';
import { Title } from '@/modules/Publish/components/Title';

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
        <Introduction />
        <Introduction />
      </Box>
  );
};

export default Publish;
