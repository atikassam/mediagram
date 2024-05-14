import React from 'react';
import { Box, HStack, VStack } from '@gluestack-ui/themed';
import IconButton from './IconButton';
import { InstaLogo } from '../../assets/Insta';
import { CustomDivider } from './StyledComponents';
import { Camera, IGTV, Send } from '../../assets/Icons';
import { Dimensions, StatusBar } from 'react-native';

const HomeHead = () => {
  const statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : 50;
  return (
    <VStack bg="$trueGray50" style={{}}>
      <HStack alignItems="center" justifyContent="space-between" mx="$2">
        <IconButton icon={() => <Camera />} onPress={() => {}} />
        <Box position="absolute" zIndex={-99} w="$full" alignItems="center">
          <InstaLogo width="105" height="28" />
        </Box>

        <HStack space={'xs'}>
          <IconButton icon={() => <IGTV />} onPress={() => {}} />
          <IconButton icon={() => <Send />} onPress={() => {}} />
        </HStack>
      </HStack>
      <CustomDivider />
    </VStack>
  );
};

export default HomeHead;
