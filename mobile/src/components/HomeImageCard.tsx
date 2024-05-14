import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  HStack,
  ThreeDotsIcon,
  VStack
} from '@gluestack-ui/themed';
import React from 'react';
import { GradientLive } from '../../assets/Insta';
import CustomAvatar from './CustomAvatar';
import { LinkButton, Text11, Text13 } from './StyledComponents';
import IconButton from './IconButton';
import ImageSlider from './ImageSlider';
import { Comment, Like, Save, Send } from '../../assets/Icons';

const HomeImageCard = () => {
  return (
    <VStack>
      <HStack p="$2.5" alignItems="center">
        <CustomAvatar
          uri="https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg"
          alt={'Hello'}
          style={{ width: 32, height: 32 }}
        />
        <VStack ml="$2.5">
          <LinkButton>
            <Text13 variant="semibold" textColor="light900">
              joshua_l
            </Text13>
          </LinkButton>
          <LinkButton>
            <Text11 textColor="light900">Tokyo, Japan</Text11>
          </LinkButton>
        </VStack>
        <Box ml="auto">
          <IconButton icon={ThreeDotsIcon} onPress={() => {}} />
        </Box>
      </HStack>
      <ImageSlider />
      <HStack p="$3">
        <IconButton icon={() => <Like />} onPress={() => {}} />
        <IconButton icon={() => <Comment />} onPress={() => {}} />
        <IconButton icon={() => <Send />} onPress={() => {}} />
        <Box ml={'auto'} />
        <IconButton icon={() => <Save />} onPress={() => {}} />
      </HStack>
      <VStack px="$3.5">
        <HStack alignItems="center" mb="$1.5">
          <CustomAvatar
            uri="https://wallpapers.com/images/hd/cool-profile-picture-minion-13pu7815v42uvrsg.jpg"
            alt={'Hello'}
            style={{ width: 17, height: 17 }}
          />
          <Box w="$1.5" />
          <Text13 textColor="light900">Liked by </Text13>

          <LinkButton>
            <Text13 variant="semibold" textColor="light900">
              craig_love
            </Text13>
          </LinkButton>
          <Text13 textColor="light900"> and </Text13>
          <LinkButton>
            <Text13 variant="semibold" textColor="light900">
              44,686 others
            </Text13>
          </LinkButton>
        </HStack>
        <Text13 textColor="light900">
          <Text13
            variant="semibold"
            textColor="light900"
            onPress={(e) => console.log('user')}
          >
            joshua_l
          </Text13>
          The game in Japan was amazing and I want to share some photos.
        </Text13>
        <Box h="$3" />
        <Text11>September 19</Text11>
      </VStack>
    </VStack>
  );
};

export default HomeImageCard;
