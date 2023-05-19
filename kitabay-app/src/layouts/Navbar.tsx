import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Flex, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  return (
    <Flex
      paddingY={4}
      paddingX={12}
      alignItems={'center'}
      justifyContent={['flex-end', null, 'space-between']}
      position={'fixed'}
      top={0}
      left={'6rem'}
      right={0}
    >
      <Flex
        alignItems={'center'}
        height={'40px'}
        display={['none', 'none', 'flex']}
      >
        <SearchIcon
          color={'gray.500'}
          mr={3}
        />
        <Input
          placeholder="Search by title, author, address"
          width={'18rem'}
          variant={'unstyled'}
          _placeholder={{
            fontSize: 'sm',
          }}
        />
      </Flex>
      <ConnectButton />
    </Flex>
  );
};
