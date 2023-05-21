import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FilePond } from 'react-filepond';

export const BookCover = () => {
  const [cover, setCover] = useState([]);
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="cover"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Uploading Cover of your Kitab
      </Text>
      <Text
        fontSize={['lg', null, 'xl']}
        lineHeight={1.3}
      >
        The cover of your Kitab is the first thing people will see when they find it on Kitabay. Make sure it stands
        out! <br />
        This cover will also be a part of NFT's metadata.
      </Text>
      <Box my={12}>
        <FilePond
          files={cover}
          onupdatefiles={setCover as any}
          allowMultiple={false}
          labelIdle='Drag & Drop your cover or <span class="filepond--label-action">Browse</span>'
          acceptedFileTypes={['image/*']}
        />
      </Box>
      <Link href={'#content'}>
        <Button
          colorScheme={'teal'}
          size={'lg'}
        >
          Continue
        </Button>
      </Link>
    </Flex>
  );
};
