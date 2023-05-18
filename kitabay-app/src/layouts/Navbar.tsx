import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { Flex } from '@chakra-ui/react';

export const Navbar = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Flex
      justifyContent={'flex-end'}
      alignItems={'center'}
      w={'100%'}
      h={'100%'}
      bgColor={'primary-bg'}
      borderBottom={'1px'}
      borderColor={'gray-800'}
      px={{ base: 4, md: 20 }}
      py={4}
    >
      <ConnectButton />
    </Flex>
  );
};
