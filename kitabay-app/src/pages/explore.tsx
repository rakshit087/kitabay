import { useEffect, useState } from 'react';
import { db } from '@/config/poybase.config';
import { Box, Grid, Text, useDisclosure } from '@chakra-ui/react';
import { KitabMintModal } from '@/modules/Kitab/components/KitabMintModal';

const Explore = () => {
  const [books, setBooks] = useState<any>([]);
  const getBooks = async () => {
    const books = await db.collection('Kitab').get();
    const booksData = books.data.map((book) => {
      return book.data;
    });
    setBooks(booksData);
  };
  useEffect(() => {
    if (books.length === 0) getBooks();
  }, []);
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={'full'}
      h={'100vh'}
      overflowY={'scroll'}
      scrollSnapType={'y mandatory'}
      scrollBehavior={'smooth'}
      paddingX={12}
      paddingY={24}
    >
      <KitabMintModal
        isOpen={isOpen}
        onClose={onClose}
        kitab={selectedBook}
      />
      {books.length > 0 ? (
        <Grid
          templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
          gap={8}
        >
          {books.map((book: any, index: number) => {
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
        <div>loading...</div>
      )}
    </Box>
  );
};

export default Explore;
