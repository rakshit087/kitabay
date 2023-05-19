import { Button, Flex, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const LandingSection = () => {
  return (
    <Flex
      alignItems={'center'}
      w={'100%'}
      bgColor={'background'}
      borderBottom={'1px solid'}
      h={['60vh', '65vh', '70vh', '75vh']}
      paddingX={[4, 8, 12, 16]}
    >
      <Flex
        alignItems={'center'}
        width={'100%'}
        height={'100%'}
        maxWidth={'4xl'}
      >
        {/* Contains Front Box Text */}
        <div>
          <Text
            fontSize={['2xl', '5xl', null, '6xl']}
            mb={2}
            fontWeight={'semibold'}
          >
            Buy, Sell, Trade or Publish Books
          </Text>
          <Text
            fontSize={['2xl', '3xl', null, '4xl']}
            mb={12}
          >
            on the Filecoin Network
          </Text>
          <ConnectButton.Custom>
            {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
              const ready = mounted && authenticationStatus !== 'loading';
              const connected =
                ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <Button
                          onClick={openConnectModal}
                          type="button"
                          colorScheme="teal"
                          size={'lg'}
                        >
                          Launch App
                        </Button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <Button
                          onClick={openChainModal}
                          type="button"
                          colorScheme="red"
                          size={'lg'}
                        >
                          Wrong network
                        </Button>
                      );
                    }

                    return (
                      <Button
                        type="button"
                        colorScheme="teal"
                        size={'lg'}
                        disabled={true}
                      >
                        Launching App 🚀
                      </Button>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </Flex>
    </Flex>
  );
};
