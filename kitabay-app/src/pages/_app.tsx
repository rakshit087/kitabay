import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/authContext';
import { RainbowKit } from '@/contexts/rainbowKit';
import { PrimaryLayout } from '@/layouts/PrimaryLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RainbowKit>
      <AuthProvider>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </AuthProvider>
    </RainbowKit>
  );
}
