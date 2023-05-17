import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useAccount } from "wagmi";

interface UserI {
  address: string;
  name: string;
  avatar: string;
}

export const AuthContext = createContext<{
  user: UserI | null;
  setUser: (user: UserI | null) => void;
  authenticated: boolean;
}>({
  user: null,
  setUser: () => {},
  authenticated: false,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserI | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {}, [address, isConnected]);

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
