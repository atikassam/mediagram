import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Input,
  InputField,
  Text
} from '@gluestack-ui/themed';
import { FacebookIcon, InstaLogo } from '../../../assets/Insta';
import Background from '../../components/Background';
import CustomAvatar from '../../components/CustomAvatar';
import CustomLink from '../../components/CustomLink';
import {
  NCenter,
  CustomDivider,
  Text12,
  Text14
} from '../../components/StyledComponents';
import { ButtonIcon } from '@gluestack-ui/themed';
import { AddIcon } from '@gluestack-ui/themed';
import React from 'react';

export default function ReAuthorizationScreen() {
  return (
    <Background>
      <NCenter px="$4">
        <InstaLogo />
        <Box h={'$10'} />
        <Input
          variant="outline"
          size="sm"
          h={'$11'}
          bg="$trueGray50"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Username, Email, Phone" />
        </Input>
        <Box h="$3" />
        <Input
          variant="outline"
          size="sm"
          h={'$11'}
          bg="$trueGray50"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Password" />
        </Input>

        <Box ml={'auto'} mt={'$5'}>
          <CustomLink onPress={() => console.log('Account')}>
            <Text12 variant="medium" textColor="regular">
              Forgot Password?
            </Text12>
          </CustomLink>
        </Box>
        <Box h={'$7'} />
        <Button
          variant={'solid'}
          size={'sm'}
          isDisabled={true}
          bgColor="#3797EF"
          rounded={'$md'}
          w={'$full'}
          h={'$11'}
        >
          <ButtonText>Log in</ButtonText>
        </Button>
        <Box h={'$9'} />

        <CustomLink onPress={() => console.log('Account')}>
          <HStack space="xs" alignItems="center">
            <FacebookIcon />
            <Text14 variant="semibold" textColor="regular">
              Log in with Facebook
            </Text14>
          </HStack>
        </CustomLink>
        <Box h="$10" />
        <HStack alignItems="center" space="3xl">
          <Box flex={1}>
            <CustomDivider />
          </Box>

          <Text12 variant="semibold">OR</Text12>
          <Box flex={1}>
            <CustomDivider />
          </Box>
        </HStack>
        <Box h="$10" />
        <HStack my="$4" space={'xs'}>
          <Text14>Don't have an account?</Text14>
          <CustomLink onPress={() => console.log('Account')}>
            <Text14 variant="semibold" textColor="regular">
              Sign up.
            </Text14>
          </CustomLink>
        </HStack>
      </NCenter>

      <Center>
        <CustomDivider />
        <HStack my="$5">
          <Text12>Instagram to Facebook</Text12>
        </HStack>
      </Center>
    </Background>
  );
}
