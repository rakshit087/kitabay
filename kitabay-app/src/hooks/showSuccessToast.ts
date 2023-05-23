import { useToast } from '@chakra-ui/react';
import { useState, useEffect, } from 'react';

export const useShowSuccessToast = () => {
  const toast = useToast();
  const [successMessage, setSuccessMessage] = useState<string>('');
  useEffect(() => {
    if (successMessage) {
      toast({
        title: 'Success!',
        description: successMessage,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [successMessage, toast]);
  return {setSuccessMessage};
};
