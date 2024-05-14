import { Box, Button, ButtonText, HStack, Center } from '@gluestack-ui/themed';
import React from 'react';
import { InstaLogo } from '../../../assets/Insta';
import Background from '../../components/Background';
import {
  CustomButton,
  CustomDivider,
  NCenter,
  Text12,
  Text14
} from '../../components/StyledComponents';
import CustomAvatar from '../../components/CustomAvatar';
import CustomLink from '../../components/CustomLink';

export default function AuthorizationScreen() {
  return (
    <Background>
      <NCenter px="$9">
        <InstaLogo />
        <Box h={'$12'} mt={'$1'} />
        <CustomAvatar
          uri="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp"
          alt="Alkazar"
        />
        <Box h={'$3'} />
        <Text14 variant="semibold" textColor="light900">
          Alkazar_01
        </Text14>
        <Box h={'$3'} />
        <CustomButton variant={'solid'} size={'sm'} isDisabled={false}>
          <ButtonText>Log in</ButtonText>
        </CustomButton>
        <Box h={'$7'} />

        <CustomLink onPress={() => console.log('Account')}>
          <Text14 variant="semibold" textColor="regular">
            Switch account
          </Text14>
        </CustomLink>
      </NCenter>
      <Center>
        <CustomDivider />
        <HStack my="$5" space={'xs'}>
          <Text12>Don't have an account?</Text12>
          <CustomLink onPress={() => console.log('Account')}>
            <Text12 textColor="light900" variant="semibold">
              Sign up.
            </Text12>
          </CustomLink>
        </HStack>
      </Center>
    </Background>
  );
}
