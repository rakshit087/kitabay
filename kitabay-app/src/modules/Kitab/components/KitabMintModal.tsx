import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Flex,
  Box,
  Text,
  Button,
  Link,
  VStack,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { loadingContext } from '@/contexts/loadingContext';
import { useShowErrorToast } from '@/hooks/showErrorToast';
import { useShowSuccessToast } from '@/hooks/showSuccessToast';
import { useAccount } from 'wagmi';
import { mintKitab } from '../services/mintKitab';
import { db } from '@/config/poybase.config';

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

export const KitabMintModal = (props: KitabModalProps) => {
  const { address } = useAccount();
  const { setLoader } = useContext(loadingContext);
  const { setErrorMessage } = useShowErrorToast();
  const { setSuccessMessage } = useShowSuccessToast();

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
                    {props.kitab.description.slice(0, 150) + (props.kitab.description.length > 150 ? '...' : '')}
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
            <Button
              colorScheme="teal"
              w={'100%'}
              mt={8}
              onClick={async () => {
                setLoader(true, 'Minting Kitab');
                try {
                  await mintKitab(props.kitab.id as `0x${string}`, props.kitab.price, address || '0x0');
                  setSuccessMessage('Kitab minted successfully!');
                  await db
                    .collection('User')
                    .record(address as string)
                    .call('updateLibrary', [db.collection('Kitab').record(props.kitab.id)]);
                  setLoader(false, '');
                  props.onClose();
                } catch (error) {
                  console.log(error);
                  setErrorMessage('Error minting Kitab');
                  setLoader(false, '');
                  props.onClose();
                }
              }}
            >
              {`Mint Kitab for ${props.kitab.price} FIL`}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};
