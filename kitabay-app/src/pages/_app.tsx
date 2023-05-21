import '@rainbow-me/rainbowkit/styles.css';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/authContext';
import { RainbowKit } from '@/contexts/rainbowKit';
import { ChakraProvider } from '@chakra-ui/react';
import { PrimaryLayout } from '@/layouts/PrimaryLayout';
import { registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import { theme } from '@/styles/theme';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType)

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
