import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { montserrat } from '@/styles/theme';
import { Box, Flex } from '@chakra-ui/react';
import { LandingSection } from './Landing';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const PrimaryLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { authenticated } = useContext(AuthContext);
  return !authenticated ? (
    <div style={montserrat.style}>
      <LandingSection />
    </div>
  ) : (
    <Flex backgroundColor="background" minH={'100vh'} width={"100%"}>
      <Sidebar />
      <Box w={"calc(100% - 6rem)"}>
        <Navbar />
        <Box
          paddingTop={20}
          paddingLeft={20}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
