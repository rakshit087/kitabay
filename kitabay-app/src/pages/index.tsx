import { Box, Text } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <Box
      style={montserrat.style}
      padding={12}
    >
      <Text fontSize={['4xl', null, '6xl', null, '7xl']} lineHeight={1.3} mb={3}>
        Welcome back,
        <br />
        {user?.name.split(' ')[0]}
      </Text>
      <Text
        fontSize={['xl', null, '2xl']}
        color={'gray.500'}
        fontStyle={'italic'}
      >
        What will you read today?
      </Text>
    </Box>
  );
}
