import { Box, HStack, ScrollView, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import Background from '../../components/Background';
import BottomNav from '../../components/BottomNav';
import {
  CustomDivider,
  LinkButton,
  StatusBarPlaceholder,
  Text13,
  Text15,
  Text16
} from '../../components/StyledComponents';
import CustomAvatar from '../../components/CustomAvatar';
import PressImage from '../../components/PressImage';

import likeData from '../../../assets/likeData.json';
import { ReactionTail, TotalLikeTail } from '../../components/ReactionTail';
import PaddingBox from '../../components/PaddingBox';

export default function LikesScreen() {
  const [pressHead, setPressHead] = useState('you');

  return (
    <Background disableSafeArea={true}>
      <StatusBarPlaceholder />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <Box>
            <HStack bg="$trueGray50" w="$full" h="$11" px="$2">
              <Box flex={1}>
                <LinkButton
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  borderBottomWidth={pressHead === 'following' ? 1 : 0}
                  borderColor="$textLight900"
                  onPress={() => setPressHead('following')}
                >
                  <Text16
                    variant="semibold"
                    textColor={
                      pressHead === 'following' ? 'light900' : 'default'
                    }
                  >
                    Following
                  </Text16>
                </LinkButton>
              </Box>
              <Box flex={1}>
                <LinkButton
                  flex={1}
                  justifyContent="center"
                  alignItems="center"
                  borderBottomWidth={pressHead === 'you' ? 1 : 0}
                  borderColor="$textLight900"
                  onPress={() => setPressHead('you')}
                >
                  <Text16
                    variant="semibold"
                    textColor={pressHead === 'you' ? 'light900' : 'default'}
                  >
                    You
                  </Text16>
                </LinkButton>
              </Box>
            </HStack>
            <CustomDivider />
          </Box>
          <LinkButton>
            <PaddingBox>
              <Text15 variant="normal" textColor="light900">
                Follow Requests
              </Text15>
            </PaddingBox>
            <CustomDivider />
          </LinkButton>
          {/* New */}
          <PaddingBox>
            <Text15 variant="semibold" textColor="light900">
              New
            </Text15>
          </PaddingBox>
          <PaddingBox pb={0}>
            {likeData.map((value, index) =>
              value.reactions.map((reaction, i) => {
                return (
                  <Box key={i}>
                    <ReactionTail data={reaction} post_url={value.post_uri} />
                  </Box>
                );
              })
            )}
          </PaddingBox>
          <CustomDivider />
          {/* Today */}
          <PaddingBox>
            <Text15 variant="semibold" textColor="light900">
              Today
            </Text15>
          </PaddingBox>
          <PaddingBox pb={0}>
            {likeData.map((value, index) => {
              return (
                <Box key={index}>
                  <TotalLikeTail
                    post_url={value.post_uri}
                    data={value.reactions}
                  />
                </Box>
              );
            })}
          </PaddingBox>
          <CustomDivider />
          {/* This Week */}
          <PaddingBox>
            <Text15 variant="semibold" textColor="light900">
              This Week
            </Text15>
          </PaddingBox>
          <PaddingBox pb={0}>
            {likeData.map((value, index) =>
              value.reactions.map((reaction, i) => {
                return (
                  <Box key={i}>
                    <ReactionTail
                      variant={
                        reaction.mention
                          ? 'mentioned'
                          : reaction.comment !== null
                          ? 'comment'
                          : reaction.follow
                          ? 'follow'
                          : 'like'
                      }
                      data={reaction}
                      post_url={value.post_uri}
                    />
                  </Box>
                );
              })
            )}
          </PaddingBox>
          <CustomDivider />
          {/* This Month */}
          <PaddingBox>
            <Text15 variant="semibold" textColor="light900">
              This Month
            </Text15>
          </PaddingBox>
          <PaddingBox pb={0}>
            <HStack py="$2" alignItems="center" justifyContent="space-between">
              <HStack alignItems="center" space="md">
                <CustomAvatar
                  uri="https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg"
                  alt={'Hello'}
                  style={{ width: 44, height: 44 }}
                />
                <LinkButton>
                  <Text13 variant="semibold" textColor="light900">
                    karennne{' '}
                    <Text13 textColor="light900">liked your photo. </Text13>
                    <Text13>1h</Text13>
                  </Text13>
                </LinkButton>
              </HStack>

              <Box h="$11" w="$11">
                <PressImage
                  alt={'test'}
                  uri={
                    'https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg'
                  }
                />
              </Box>
            </HStack>
          </PaddingBox>
          <CustomDivider />
        </VStack>
      </ScrollView>
      {/* bottom nev */}
      <BottomNav />
    </Background>
  );
}
