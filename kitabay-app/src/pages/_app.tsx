import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/authContext';
import { RainbowKit } from '@/contexts/rainbowKit';
import { ChakraProvider } from '@chakra-ui/react';
import { PrimaryLayout } from '@/layouts/PrimaryLayout';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RainbowKit>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <PrimaryLayout>
            <Component {...pageProps} />
          </PrimaryLayout>
        </AuthProvider>
      </ChakraProvider>
    </RainbowKit>
  );
}
