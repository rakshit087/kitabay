import { useToast } from '@chakra-ui/react';
import { useState, useEffect, use } from 'react';

export const useShowErrorToast = () => {
  const toast = useToast();
  const [errorMessage, setErrorMessage] = useState<string>('');
  useEffect(() => {
    if (errorMessage) {
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [errorMessage, toast]);
  return {setErrorMessage};
};
