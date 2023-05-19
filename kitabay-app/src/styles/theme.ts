import { Montserrat } from 'next/font/google';
import { extendTheme } from '@chakra-ui/react';
import { withDefaultColorScheme } from '@chakra-ui/react';
export const montserrat = Montserrat({ subsets: ['latin'] });

export const theme = extendTheme(withDefaultColorScheme({ colorScheme: 'teal' }), {
  colors: {
    background: '#FDFBF3',
  },
 components: {
    Input: {
        defaultProps: {
            focusBorderColor: 'teal.500',
        }
    }
 }
},);
