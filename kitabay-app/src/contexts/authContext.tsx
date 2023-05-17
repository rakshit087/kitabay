import React from "react";
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
} | null>(null);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserI | null>(null);
  const { address, isConnected } = useAccount();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
