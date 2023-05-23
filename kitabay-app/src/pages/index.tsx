import { Box, Grid, Text, useDisclosure } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { db } from '@/config/poybase.config';
import { KitabViewModal } from '@/modules/Kitab/components/KitabViewModal';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  const { user } = useContext(AuthContext);
  const [library, setLibrary] = useState<any[]>([]);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getUserLib = async () => {
    const userDetails = await db
      .collection('User')
      .record(user?.address || '')
      .get();
    const userLib = userDetails.data.library.map(async (bookId: any) => {
      return await db.collection('Kitab').record(bookId.id).get();
    });
    const books = await Promise.all(userLib);
    setLibrary(books.map((book) => book.data));
  };
  useEffect(() => {
    if (library.length == 0) {
      getUserLib();
    }
  }, [user]);
  return (
    <Box
      style={montserrat.style}
      paddingX={12}
      paddingY={24}
    >
      <KitabViewModal
        isOpen={isOpen}
        onClose={onClose}
        kitab={selectedBook}
      />
      <Text
        fontSize={['4xl', null, '6xl', null, '7xl']}
        lineHeight={1.3}
        mb={3}
      >
        Welcome back,
        <br />
        {user?.name.split(' ')[0]}
      </Text>
      <Text
        fontSize={['xl', null, '2xl']}
        color={'gray.500'}
        fontStyle={'italic'}
      >
        What will you read today?
      </Text>
      <Text
        fontSize={'xl'}
        mt={12}
        mb={3}
      >
        Your Library
      </Text>
      {library.length > 0 ? (
        <Grid
          templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
          gap={8}
        >
          {library.map((book: any, index: number) => {
            return (
              <Box
                key={index}
                cursor={'pointer'}
                onClick={() => {
                  setSelectedBook(book);
                  onOpen();
                }}
              >
                <Box
                  backgroundImage={`url(${'https://gateway.lighthouse.storage/ipfs/' + book.cover})`}
                  backgroundSize={'cover'}
                  backgroundPosition={'center'}
                  w={'9.5rem'}
                  h={'14.25rem'}
                  mb={2}
                />
                <Text
                  fontSize={'md'}
                  fontWeight={'semibold'}
                >
                  {book.title}
                </Text>
                <Text
                  fontSize={'sm'}
                  as={'i'}
                >
                  By {book.authorName}
                </Text>
              </Box>
            );
          })}
        </Grid>
      ) : (
        <Text fontSize={'xl'}>You have no books in your library</Text>
      )}
    </Box>
  );
}
