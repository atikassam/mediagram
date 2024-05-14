import React from 'react';
import Background from '../../components/Background';
import { Box, FlatList, HStack, ScrollView } from '@gluestack-ui/themed';
import {
  CustomDivider,
  StatusBarPlaceholder
} from '../../components/StyledComponents';

import InstaGradientAvatar from '../../components/InstaGradientAvatar';
import HomeImageCard from '../../components/HomeImageCard';
import HomeHead from '../../components/HomeHead';
import BottomNav from '../../components/BottomNav';

const storyData = [
  {
    uri: 'https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg',
    name: 'Your story',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/originals/9c/ac/dc/9cacdc207e8997bf90a3daf9c8aaca80.jpg',
    name: 'Jhon_mskjs',
    isLive: true
  },
  {
    uri: 'https://i.pinimg.com/originals/23/de/49/23de493ca285c455b065cc5eecdcaf2d.jpg',
    name: 'Falicaty',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/736x/11/9b/82/119b822c24bfddfaab7ee792ba575413.jpg',
    name: 'Radha',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/originals/23/de/49/23de493ca285c455b065cc5eecdcaf2d.jpg',
    name: 'Sadieanto',
    isLive: false
  },
  {
    uri: 'https://i.pinimg.com/originals/23/de/49/23de493ca285c455b065cc5eecdcaf2d.jpg',
    name: 'Ramados',
    isLive: true
  },
  {
    uri: 'https://i.pinimg.com/originals/9c/ac/dc/9cacdc207e8997bf90a3daf9c8aaca80.jpg',
    name: 'Katy',
    isLive: false
  }
];

const MainScreen = () => {
  return (
    <Background disableSafeArea={true}>
      <StatusBarPlaceholder />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <HomeHead />
          {/* Story Head */}
          <HStack py={'$2.5'} space="lg">
            <FlatList
              data={storyData}
              keyExtractor={(res: any, key) => res + key}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={(res: any) => {
                return (
                  <Box mx="$2.5">
                    <InstaGradientAvatar
                      uri={res.item.uri}
                      name={res.item.name}
                      isLive={res.item.isLive}
                    />
                  </Box>
                );
              }}
            />
          </HStack>
          <CustomDivider bg="#3c3c4349" />
          {/* Content section */}
          <HomeImageCard />
          <HomeImageCard />
          <HomeImageCard />
        </Box>
      </ScrollView>
      {/* bottom nev */}
      <BottomNav />
    </Background>
  );
};

export default MainScreen;
