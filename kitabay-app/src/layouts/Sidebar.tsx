import { ChatIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { BiLibrary, BiHomeAlt, BiEdit, BiUser } from 'react-icons/bi';

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
      {/* vertically centered box */}
      <Flex
        flex={1}
        flexDir={'column'}
        justifyContent={'center'}
      >
        <Icon
          as={BiHomeAlt}
          fontSize={'36px'}
          mb={12}
          cursor={'pointer'}
        />
        <Icon
          as={BiLibrary}
          fontSize={'36px'}
          mb={12}
          cursor={'pointer'}
        />
        <Icon
          as={BiEdit}
          fontSize={'36px'}
          mb={12}
          cursor={'pointer'}
        />
        <Icon
          as={BiUser}
          fontSize={'36px'}
          mb={12}
          cursor={'pointer'}
        />
      </Flex>
    </Flex>
  );
};
