import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';

export const Sidebar = () => {
  return (
    <Flex
      width={['4rem', null, '6rem']}
      flexDir={'column'}
      alignItems={'center'}
      position={'fixed'}
      top={4}
      bottom={4}
      borderRight={'1px solid'}
      borderColor={'gray.500'}
    >
      <IconButton
        fontSize={'40px'}
        icon={
          <HamburgerIcon
            color={'black'}
            fontSize={'32px'}
          />
        }
        colorScheme="whiteAlpha"
        aria-label={'Open Menu'}
      />
    </Flex>
  );
};
