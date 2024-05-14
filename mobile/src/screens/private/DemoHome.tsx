import { Button, ButtonText, ScrollView, VStack } from '@gluestack-ui/themed';

import { Box, Text, View } from '@gluestack-ui/themed';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import Background from '../../components/Background';
import { CustomButton } from '../../components/StyledComponents';
const DemoHome = () => {
  const navigation = useNavigation<any>();
  const { colorMode, toggleColorMode } = useCustomTheme();

  return (
    <Background>
      <ScrollView>
        <VStack
          space="sm"
          width="100%"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('AuthorizationScreen')}
          >
            <ButtonText>AuthorizationScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('ReAuthorizationScreen')}
          >
            <ButtonText>ReAuthorizationScreen</ButtonText>
          </Button>

          <CustomButton onPress={() => navigation.navigate('MainScreen')}>
            <ButtonText>Home</ButtonText>
          </CustomButton>

          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('AddImageScreen')}
          >
            <ButtonText>AddImageScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('DirectMessageScreen')}
          >
            <ButtonText>DirectMessageScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('CameraShortScreen')}
          >
            <ButtonText>CameraShortScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('ScreenPics')}
          >
            <ButtonText>ScreenPics</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('FollowingScreen')}
          >
            <ButtonText>FollowingScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('LikesScreen')}
          >
            <ButtonText>LikesScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('LiveScreen')}
          >
            <ButtonText>LiveScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('ProfileEditScreen')}
          >
            <ButtonText>ProfileEditScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('ProfileMenuScreen')}
          >
            <ButtonText>ProfileMenuScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <ButtonText>ProfileScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('SearchScreen')}
          >
            <ButtonText>SearchScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('StoryScreen')}
          >
            <ButtonText>StoryScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={() => navigation.navigate('TemplateScreen')}
          >
            <ButtonText>TemplateScreen</ButtonText>
          </Button>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'lg'}
            isDisabled={false}
            onPress={toggleColorMode}
          >
            <ButtonText>Change Theme</ButtonText>
          </Button>
        </VStack>
      </ScrollView>
    </Background>
  );
};
export default DemoHome;
