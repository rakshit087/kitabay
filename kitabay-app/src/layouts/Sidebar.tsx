import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { BiLibrary, BiHomeAlt, BiEdit, BiUser } from 'react-icons/bi';
import Link from 'next/link';

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
      <Flex
        flex={1}
        flexDir={'column'}
        justifyContent={'center'}
      >
        <Link href={'/'}>
          <Icon
            as={BiHomeAlt}
            fontSize={'36px'}
            mb={12}
            cursor={'pointer'}
          />
        </Link>
        <Icon
          as={BiLibrary}
          fontSize={'36px'}
          mb={12}
          cursor={'pointer'}
        />
        <Link href={'/publish'}>
          <Icon
            as={BiEdit}
            fontSize={'36px'}
            mb={12}
            cursor={'pointer'}
          />
        </Link>
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
