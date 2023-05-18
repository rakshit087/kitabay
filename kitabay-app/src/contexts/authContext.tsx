import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useAccount } from 'wagmi';
import { db } from '@/config/poybase.config';
import { OnboardingCard } from '@/components/OnboardingCard';

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

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserI | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (isConnected && address) {
        try {
          const user = await db
            .collection('User')
            .record(address as string)
            .get();
        } catch (e: any) {
          if (e.message === 'record/not-found error') {
            setShowOnboarding(true);
          }
        }
      }
    })();
  }, [address, isConnected]);

  return (
    <AuthContext.Provider value={{ user, setUser, authenticated }}>
      <OnboardingCard
        isOpen={showOnboarding}
        setIsOpen={setShowOnboarding}
      />
      {children}
    </AuthContext.Provider>
  );
};
