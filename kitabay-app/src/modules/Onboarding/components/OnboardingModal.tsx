import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Image,
  Flex,
  useSteps,
} from '@chakra-ui/react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Form, Formik } from 'formik';
import { OnboardingCard } from './OnboardingCard';
import { OnboardingForm } from './OnboardingForm';

interface OnboardingModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const OnboardingModal = ({ isOpen, setIsOpen }: OnboardingModalProps) => {
  const [parent, enableAnimations] = useAutoAnimate();
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: 4,
  });
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
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
        <Formik
          initialValues={{
            name: '',
            avatar: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <>
              <ModalBody>
                <div ref={parent}>
                  {activeStep === 1 && (
                    <OnboardingCard
                      title={'Browse and search for books'}
                      description={
                        'Browse and search through our collection of books. Search by title or author, or browse through our categories.'
                      }
                      imageSrc={'images/onboarding/books.svg'}
                    />
                  )}
                  {activeStep === 2 && (
                    <OnboardingCard
                      title={'Mint Books as NFT'}
                      description={"Mint your books as NFTs and get access to the book's digital copy."}
                      imageSrc={'images/onboarding/nft.svg'}
                    />
                  )}
                  {activeStep === 3 && (
                    <OnboardingCard
                      title={"Sell, Trade, Exchange. It's an NFT!"}
                      description={
                        'Sell, Trade, Exchange your Book NFTs with other users. You have full custody over your library.'
                      }
                      imageSrc={'images/onboarding/buysell.svg'}
                    />
                  )}
                  {activeStep === 4 && (
                    <OnboardingForm 
                      handleSubmit={handleSubmit}
                      errors={errors}
                      touched={touched}
                    />
                  )}
                </div>
              </ModalBody>
              <ModalFooter justifyContent={'space-between'}>
                <Button
                  mr={3}
                  onClick={() => {
                    setActiveStep(activeStep - 1);
                  }}
                  isDisabled={activeStep === 1}
                  width={'5rem'}
                >
                  Back
                </Button>

                {activeStep != 4 ? (
                  <Button
                    onClick={() => setActiveStep(activeStep + 1)}
                    isDisabled={activeStep === 4}
                    width={'5rem'}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    width={'5rem'}
                    onClick={() => {
                      handleSubmit();
                      setIsOpen(false);
                    }}
                  >
                    Finish
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};
