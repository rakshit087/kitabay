import React from 'react';
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { filecoinHyperspace, localhost } from 'wagmi/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

export const RainbowKit: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { chains, publicClient } = configureChains([filecoinHyperspace, localhost], [publicProvider()]);

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: '#79B3B7',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
