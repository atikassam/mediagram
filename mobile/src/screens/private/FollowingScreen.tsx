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
import PaddingBox from '../../components/PaddingBox';
import followingData from '../../../assets/followingData.json';
import { FollowingReactionTail } from '../../components/FollowingReactionTail';
import { LikedPosts } from '../../components/LikedPosts';
import LikeGrouped from '../../components/LikeGrouped';

export default function FollowingScreen() {
  const [pressHead, setPressHead] = useState('following');

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

          {/* New */}

          <PaddingBox pb={0}>
            {followingData.map((value, index) =>
              value.reactions.map((reaction, i) => {
                return (
                  <Box key={i}>
                    <LikedPosts data={reaction} post_url={value.post_uri} />
                  </Box>
                );
              })
            )}
          </PaddingBox>
          {/* Today */}

          <PaddingBox pb={0}>
            {followingData.map((value, index) => {
              return (
                <Box key={index}>
                  <LikeGrouped
                    post_url={value.post_uri}
                    data={value.reactions}
                  />
                </Box>
              );
            })}
            {followingData.map((value, index) => {
              return (
                <Box key={index}>
                  <LikeGrouped
                    post_url={value.post_uri}
                    data={value.reactions}
                  />
                </Box>
              );
            })}
          </PaddingBox>
          {/* This Week */}

          <PaddingBox pb={0}>
            {followingData.map((value, index) =>
              value.reactions.map((reaction, i) => {
                return (
                  <Box key={i}>
                    <FollowingReactionTail
                      variant={
                        reaction.mention
                          ? 'mentioned'
                          : reaction.comment !== null
                          ? 'comment'
                          : reaction.follow
                          ? 'follow'
                          : 'likedComment'
                      }
                      data={reaction}
                      post_url={value.post_uri}
                    />
                  </Box>
                );
              })
            )}
          </PaddingBox>
          {/* This Month */}
        </VStack>
      </ScrollView>
      {/* bottom nev */}
      <BottomNav />
    </Background>
  );
}
