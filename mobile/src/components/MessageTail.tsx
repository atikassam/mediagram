import { HStack, Box, VStack } from '@gluestack-ui/themed';
import * as React from 'react';
import CustomAvatar from './CustomAvatar';
import { Text13 } from './StyledComponents';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import IconButton from './IconButton';

export type LikedPostsProps = {
  data?: any;
  post_url?: string;
};
const MessageTail = (props: LikedPostsProps) => {
  const { data, post_url } = props;
  //   const posts = data.liked_post;
  //   console.log(data.liked_post.length);

  return (
    <HStack py="$2" space="md" alignItems="center">
      {/* start */}
      <Box mb="auto">
        <CustomAvatar
          uri={data.profile_uri}
          alt={data.name}
          style={{ width: 56, height: 56 }}
        />
      </Box>
      {/* middle */}
      <VStack flex={1}>
        <Text13 textColor="light900">{data.name}</Text13>
        <HStack justifyContent="space-between">
          <Text13>{data.lastMsg}</Text13>
          <Text13>• {data.time}</Text13>
        </HStack>
      </VStack>
      <Box>
        <IconButton
          icon={() => (
            <SimpleLineIcons name="camera" size={24} color="#00000066" />
          )}
          onPress={() => {}}
        />
      </Box>
    </HStack>
  );
};

export default MessageTail;
