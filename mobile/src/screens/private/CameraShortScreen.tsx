import { Box, HStack, Image, ScrollView, VStack } from '@gluestack-ui/themed';
import Background from '../../components/Background';
import IconButton from '../../components/IconButton';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import PressImage from '../../components/PressImage';
import PaddingBox from '../../components/PaddingBox';
import {
  LinkButton,
  Text11,
  Text13,
  Text15
} from '../../components/StyledComponents';
import { Dimensions } from 'react-native';
import { ChevronRightIcon } from '@gluestack-ui/themed';
import { SettingsIcon } from '@gluestack-ui/themed';
import { useState } from 'react';

const postMode = ['TYPE', 'LIVE', 'NORMAL', 'BOOMERANG', 'SUPERZOOM'];

export default function CameraShortScreen() {
  const [cameraMode, setCameraMode] = useState('NORMAL');
  return (
    <Background disableSafeArea={false} variant="dark" statusBarMode="light">
      <VStack flex={1}>
        {/* Camera feed */}
        <Box w={'$full'} h="$full" position="absolute">
          <Image
            size="full"
            borderRadius={8}
            resizeMode="cover"
            alt="live"
            source={{
              uri: 'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863'
            }}
          />
        </Box>
        {/* Camera feed top nev */}
        <PaddingBox pl="$2.5">
          <HStack alignItems="center" justifyContent="space-between">
            <IconButton color="$white" icon={SettingsIcon} onPress={() => {}} />
            <IconButton
              color="$white"
              icon={ChevronRightIcon}
              onPress={() => {}}
            />
          </HStack>
        </PaddingBox>
        {/* Settings */}
        <Box mt="auto" />
        <PaddingBox pb="$8">
          <HStack h={67} alignItems="center" justifyContent="center" space="xl">
            <Box w="$7" h="$7" overflow="hidden" rounded="$sm">
              <PressImage
                onPress={() => console.log('image')}
                alt={'image'}
                uri={
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                }
              />
            </Box>
            <IconButton
              icon={() => (
                <Box>
                  <MaterialCommunityIcons name="flash" size={30} color="#fff" />
                </Box>
              )}
              onPress={() => {}}
            />
            {/* Shatter Button */}
            <Box w="$20" h="$20" rounded="$full" overflow="hidden">
              <LinkButton onPress={() => {}}>
                <Box w="$full" h="$full" bgColor="#ffffff4c" p="$3">
                  <Box w="$full" h="$full" bgColor="#FEFEFE" rounded="$full" />
                </Box>
              </LinkButton>
            </Box>

            <IconButton
              icon={() => (
                <Box>
                  <MaterialIcons name="cameraswitch" size={30} color="#fff" />
                </Box>
              )}
              onPress={() => {}}
            />
            <IconButton
              icon={() => (
                <Box>
                  <MaterialIcons
                    name="face-retouching-natural"
                    size={30}
                    color="#fff"
                  />
                </Box>
              )}
              onPress={() => {}}
            />
          </HStack>
        </PaddingBox>
      </VStack>
      {/* bottom nav */}
      <HStack h={67} p="$3" alignItems="center" space="xl">
        {/* Modes of camera */}
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1
          }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {postMode.map((mode, index) => {
            return (
              <Text11 p="$3" key={index} variant="semibold" textColor="white">
                {mode}
              </Text11>
            );
          })}
        </ScrollView>
      </HStack>
    </Background>
  );
}
