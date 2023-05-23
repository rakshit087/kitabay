import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody, Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

interface KitabModalProps {
  isOpen: boolean;
  onClose: () => void;
  kitab: {
    id: string;
    title: string;
    description: string;
    authorName: string;
    cover: string;
    noOfCopies: number;
    price: number;
    content: string;
  };
}

export const KitabViewModal = (props: KitabModalProps) => {
  return (
    props.kitab && (
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        isCentered
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody
            px={8}
            py={8}
          >
            <Flex>
              <Box
                backgroundImage={`url(${'https://gateway.lighthouse.storage/ipfs/' + props.kitab.cover})`}
                backgroundSize={'cover'}
                backgroundPosition={'center'}
                w={'9.5rem'}
                h={'14.25rem'}
                mb={2}
                rounded={'lg'}
              />
              <Flex
                ml={12}
                flexDir={'column'}
                justifyContent={'space-between'}
                flex={1}
              >
                <Box>
                  <Text
                    fontSize={'4xl'}
                    fontWeight={'semibold'}
                    mb={2}
                  >
                    {props.kitab.title}
                  </Text>
                  <Text
                    fontSize={'md'}
                    mb={2}
                  >
                    {props.kitab.description.slice(0, 100) + (props.kitab.description.length > 100 ? '...' : '')}
                  </Text>
                </Box>
                <Text
                  fontSize={'md'}
                  as={'i'}
                  textAlign={'right'}
                >
                  By {props.kitab.authorName}
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Link
              href={`https://files.lighthouse.storage/viewFile/${props.kitab.content}`}
              target="_blank"
            >
              <Button
                colorScheme="teal"
                w={'100%'}
                mt={8}
              >
                {`View Kitab`}
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};
