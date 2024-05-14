import {
  Box,
  HStack,
  ScrollView,
  SearchIcon,
  VStack
} from '@gluestack-ui/themed';
import Background from '../../components/Background';
import BottomNav from '../../components/BottomNav';
import { StatusBarPlaceholder } from '../../components/StyledComponents';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import IconButton from '../../components/IconButton';
import { IGTVIcon, LiveIcon, ShopIcon } from '../../../assets/Icons';
import Chip from '../../components/Chip';
import { Dimensions, StyleSheet } from 'react-native';
import PressImage from '../../components/PressImage';

const { width } = Dimensions.get('window');

const chipData = ['Style', 'Sports', 'Auto', 'Mobile', 'Music'];

export default function SearchScreen() {
  return (
    <Background disableSafeArea={true}>
      <StatusBarPlaceholder />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Box bg="$trueGray50">
            <VStack w={'$full'} px="$2" pt={'$1'} pb={'$2'}>
              <HStack w={'$full'}>
                <CustomInput
                  leftIcon={SearchIcon}
                  placeHolder="Search"
                  borderWidth="$0"
                />
                <IconButton icon={LiveIcon} onPress={() => {}} />
              </HStack>
            </VStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={'sm'} px="$2">
                <Chip onPress={() => {}} icon={<IGTVIcon />}>
                  IGTV
                </Chip>

                <Chip onPress={() => {}} icon={<ShopIcon />}>
                  Shop
                </Chip>
                {chipData.map((data, index) => (
                  <Chip onPress={() => {}} key={index}>
                    {data}
                  </Chip>
                ))}
              </HStack>
            </ScrollView>
            <Box h="$2" />
          </Box>
          {/* Content section */}
          <HStack justifyContent="space-between">
            <VStack justifyContent="space-between">
              <Box w={width / 3 - 1} h={width / 3 - 1} bg="$amber400">
                <PressImage
                  uri={'https://via.placeholder.com/300'}
                  alt={'image'}
                />
              </Box>
              <Box w={width / 3 - 1} h={width / 3}>
                <PressImage
                  uri={'https://via.placeholder.com/300'}
                  alt={'image'}
                />
              </Box>
            </VStack>
            <Box w={width / 1.5} h={width / 1.5}>
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
          </HStack>
          <HStack justifyContent="space-between" mt={1}>
            <Box w={width / 3 - 1} h={width / 3 - 1} bg="$amber400">
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
            <Box w={width / 3 - 1} h={width / 3}>
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
            <Box w={width / 3 - 1} h={width / 3}>
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
          </HStack>
          <HStack justifyContent="space-between" mt={1}>
            <Box w={width / 3 - 1} h={width / 3 - 1} bg="$amber400">
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
            <Box w={width / 3 - 1} h={width / 3}>
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
            <Box w={width / 3 - 1} h={width / 3}>
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
          </HStack>
          <HStack
            justifyContent="space-between"
            mt={1}
            flexDirection="row-reverse"
          >
            <VStack justifyContent="space-between">
              <Box w={width / 3 - 1} h={width / 3 - 1} bg="$amber400">
                <PressImage
                  uri={'https://via.placeholder.com/300'}
                  alt={'image'}
                />
              </Box>
              <Box w={width / 3 - 1} h={width / 3}>
                <PressImage
                  uri={'https://via.placeholder.com/300'}
                  alt={'image'}
                />
              </Box>
            </VStack>
            <Box w={width / 1.5} h={width / 1.5}>
              <PressImage
                uri={'https://via.placeholder.com/300'}
                alt={'image'}
              />
            </Box>
          </HStack>
        </Box>
      </ScrollView>
      {/* bottom nev */}
      <BottomNav />
    </Background>
  );
}
