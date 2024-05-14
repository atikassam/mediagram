import {
  HStack,
  Box,
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  ButtonText
} from '@gluestack-ui/themed';
import * as React from 'react';
import CustomAvatar from './CustomAvatar';
import PressImage from './PressImage';
import {
  CustomButton,
  CustomButtonText,
  LinkButton,
  Text13
} from './StyledComponents';
import { AvatarImage } from '@gluestack-ui/themed';

export type LikedPostsProps = {
  data: any;
  post_url: string;
};

const accountHolder = '@Loki_asgard';

export const LikedPosts: React.FC<LikedPostsProps> = (props) => {
  const { data, post_url } = props;
  const posts = data.liked_post;
  //   console.log(data.liked_post.length);

  return (
    <HStack py="$2" alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" space="md">
        {/* start */}
        <Box mb="auto">
          <CustomAvatar
            uri={data.user_uri}
            alt={data.username}
            style={{ width: 44, height: 44 }}
          />
        </Box>

        <HStack
          flexDirection={posts.length > 1 ? 'column' : 'row'}
          justifyContent="space-between"
          flex={1}
        >
          {/* middle */}
          <Box minHeight="$11" justifyContent="center">
            <Box maxWidth={'$48'}>
              <Text13>
                <Text13
                  variant="semibold"
                  textColor="light900"
                  onPress={() => {
                    console.log(data.username);
                  }}
                >
                  {data.username}{' '}
                </Text13>
                <Text13 textColor="light900">
                  {`liked ${data.liked_post.length} posts. `}
                </Text13>
                {data.time}
              </Text13>
            </Box>
          </Box>

          {/* end */}
          <HStack space="sm" flexWrap="wrap">
            {posts.map((res: any, index: any) => {
              return (
                <Box h="$11" w="$11" key={index}>
                  <PressImage alt={res.owner} uri={res.uri} />
                </Box>
              );
            })}
          </HStack>
        </HStack>
      </HStack>
    </HStack>
  );
};
