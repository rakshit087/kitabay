import "@rainbow-me/rainbowkit/styles.css";
import React from "react";
import { createContext, useState } from "react";

import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { filecoinHyperspace } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

interface UserI {
  address: string;
  name: string;
  avatar: string;
}

export const AuthContext = createContext<{
  user: UserI | null;
  setUser: (user: UserI | null) => void;
} | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserI | null>(null);

  const { chains, publicClient } = configureChains([filecoinHyperspace], [publicProvider()]);

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
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
          accentColor: "#79B3B7",
          accentColorForeground: "white",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <AuthContext.Provider value={{ user, setUser }}>
          {children}
        </AuthContext.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
