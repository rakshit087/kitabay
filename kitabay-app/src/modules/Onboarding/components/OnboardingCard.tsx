import { Flex, Image, Text } from '@chakra-ui/react';

interface OnboardingCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const OnboardingCard = (props: OnboardingCardProps) => {
  return (
    <Flex
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'24rem'}
    >
      <Image
        src={props.imageSrc}
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
        {props.title}
      </Text>
      <Text textAlign={'center'}>{props.description}</Text>
    </Flex>
  );
};
