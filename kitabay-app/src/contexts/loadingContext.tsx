import { Box, Spinner, Text } from '@chakra-ui/react';
import { createContext, useState } from 'react';

export const loadingContext = createContext<{
  setLoader: (loading: boolean, message: string) => void;
}>({
  setLoader: () => {},
});

export const LoadingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const setLoader = (loading: boolean, message: string) => {
    setIsLoading(loading);
    setMessage(message);
  };

  return (
    <loadingContext.Provider
      value={{
        setLoader,
      }}
    >
      <Box
        position={'fixed'}
        top={0}
        left={0}
        width={'100%'}
        height={'100%'}
        backgroundColor={'rgba(255,255,255,0.5)'}
        display={isLoading ? 'flex' : 'none'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        zIndex={9999}
        backdropFilter={'blur(5px)'}
      >
        <Spinner
          size={'xl'}
          color="teal.500"
          borderWidth={'5px'}
        />
        <Text
          mt={4}
          fontSize={'xl'}
          fontWeight={'semibold'}
        >
          {message}
        </Text>
      </Box>
      {children}
    </loadingContext.Provider>
  );
};
