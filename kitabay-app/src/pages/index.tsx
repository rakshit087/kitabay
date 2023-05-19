import { Box } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box style={montserrat.style}>
      <h1>Kitabay</h1>
    </Box>
  );
}
