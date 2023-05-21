import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FilePond } from 'react-filepond';

export const BookContent = () => {
  const [cover, setCover] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <Flex
      height={'100vh'}
      flexDirection={'column'}
      position={'relative'}
      scrollSnapAlign={'start'}
      paddingX={12}
      paddingY={24}
      id="content"
    >
      <Text
        fontSize={['4xl', null, '5xl']}
        lineHeight={1.3}
        mb={12}
      >
        Uploading Content of your Kitab
      </Text>
      <Text
        fontSize={['lg', null, 'xl']}
        lineHeight={1.3}
      >
        Upload the content of your Kitab in PDF format. <br />
        This content will be accessable to the readers who buy your Kitab NFT.
      </Text>
      <Box my={12}>
        <FilePond
          files={cover}
          onupdatefiles={setCover as any}
          allowMultiple={false}
          labelIdle='Drag & Drop your content or <span class="filepond--label-action">Browse</span>'
          acceptedFileTypes={['application/pdf']}
        />
      </Box>
      <Link href={'#content'}>
        <Button
          colorScheme={'teal'}
          size={'lg'}
          isLoading={loading}
          onClick={() => setLoading(true)}
        >
          Continue
        </Button>
      </Link>
    </Flex>
  );
};
