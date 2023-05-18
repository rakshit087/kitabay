import { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Progress,
  Text,
  Image,
  Flex,
  SlideFade,
  useSteps,
} from '@chakra-ui/react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface OnboardingCardProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const OnboardingCard = ({ isOpen, setIsOpen }: OnboardingCardProps) => {
  const [parent, enableAnimations] = useAutoAnimate();
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: 4,
  });
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay backdropFilter={'blur(4px)'} />
      <ModalContent padding={4}>
        <ModalHeader>
          <Text
            fontSize={['2xl', '3xl', '4xl']}
            textAlign={'center'}
            fontWeight={'semiBold'}
          >
            Welcome to Kitabay
          </Text>
        </ModalHeader>
        <ModalBody>
          <div ref={parent}>
            {activeStep === 1 && (
              <Flex
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'24rem'}
              >
                <Image
                  src={'images/onboarding/books.svg'}
                  alt={'Books'}
                  width={'auto'}
                  height={'200px'}
                  mb={4}
                />
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  textAlign={'center'}
                  marginY={4}
                  fontWeight={'semibold'}
                >
                  Browse and search for books
                </Text>
                <Text textAlign={'center'}>
                  Browse and search through our collection of books. Search by title or author, or browse through our
                  categories.
                </Text>
              </Flex>
            )}
            {activeStep === 2 && (
              <Flex
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'24rem'}
              >
                <Image
                  src={'images/onboarding/nft.svg'}
                  alt={'Books'}
                  width={'auto'}
                  height={'200px'}
                  mb={4}
                />
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  textAlign={'center'}
                  marginY={4}
                  fontWeight={'semibold'}
                >
                  Mint Books as NFT
                </Text>
                <Text textAlign={'center'}>Mint your books as NFTs and get access to the book's digital copy.</Text>
              </Flex>
            )}
            {activeStep === 3 && (
              <Flex
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'24rem'}
              >
                <Image
                  src={'images/onboarding/buysell.svg'}
                  alt={'Books'}
                  width={'auto'}
                  height={'200px'}
                  mb={4}
                />
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  textAlign={'center'}
                  marginY={4}
                  fontWeight={'semibold'}
                >
                  Sell, Trade, Exchange. It's an NFT!
                </Text>
                <Text textAlign={'center'}>
                  Sell, Trade, Exchange your Book NFTs with other users. You have full custody over your library.
                </Text>
              </Flex>
            )}
            {activeStep === 4 && (
              <Flex
                flexDir={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'24rem'}
              >
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  textAlign={'center'}
                  marginY={4}
                  fontWeight={'semibold'}
                >
                  First let's set up your account
                </Text>
              </Flex>
            )}
          </div>
        </ModalBody>
        <ModalFooter justifyContent={'space-between'}>
          <Button
            colorScheme="teal"
            mr={3}
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
            isDisabled={activeStep === 1}
            width={"5rem"}
          >
            Back
          </Button>

          {activeStep != 4 ? (
            <Button
              colorScheme="teal"
              onClick={() => setActiveStep(activeStep + 1)}
              isDisabled={activeStep === 4}
              width={"5rem"}
            >
              Next
            </Button>
          ) : (
            <Button
              colorScheme="teal"
              onClick={() => setActiveStep(activeStep + 1)}
              width={"5rem"}
            >
              Finish
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
