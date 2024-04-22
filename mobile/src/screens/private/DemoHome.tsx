import { Button, ButtonText, VStack } from '@gluestack-ui/themed';

import { Box, Text, View } from '@gluestack-ui/themed';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const DemoHome = () => {
  const navigation = useNavigation<any>();
  return (
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
    </VStack>
  );
};
export default DemoHome;
