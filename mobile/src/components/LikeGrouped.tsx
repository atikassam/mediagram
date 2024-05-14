import {
  HStack,
  Box,
  AvatarGroup,
  Avatar,
  AvatarFallbackText,
  AvatarImage
} from '@gluestack-ui/themed';
import { ReactionTailProps } from './FollowingReactionTail';
import PressImage from './PressImage';
import { Text13 } from './StyledComponents';

export const LikeGrouped = (props: ReactionTailProps) => {
  const { post_url, data } = props;

  const total_likes = data.filter(
    (reaction: any) => reaction.like === true
  ).length;

  const recentLikes = data
    .filter((reaction: any) => reaction.like === true)
    .slice(0, 2);

  const postOwner = 'Martin';
  console.log(data[1]);

  return (
    <HStack py="$2" alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" space="md">
        <Box h="$11" w="$11">
          <AvatarGroup>
            {recentLikes.map((avatar: any, index: number) => {
              return (
                <Avatar
                  key={index}
                  w="$8"
                  h="$8"
                  borderColor="$white"
                  borderWidth="$2"
                  position="absolute"
                  left={index === 1 ? '$6' : '$2'}
                  top={index === 1 ? '$0' : '$3'}
                  bg={'$light300'}
                  $dark-borderColor="$black"
                >
                  <AvatarFallbackText>{avatar.username}</AvatarFallbackText>
                  <AvatarImage
                    alt={avatar.username}
                    source={{
                      uri: avatar.user_uri
                    }}
                  />
                </Avatar>
              );
            })}
          </AvatarGroup>
        </Box>
        <Box maxWidth={'$48'}>
          <Text13>
            {recentLikes.map((user: any, index: number) => {
              return (
                <Text13
                  key={index}
                  variant="semibold"
                  textColor="light900"
                  onPress={() => {
                    console.log(user.username);
                  }}
                >
                  {user.username},{' '}
                </Text13>
              );
            })}
            <Text13 textColor="light900">and </Text13>
            <Text13 variant="semibold" textColor="light900" onPress={() => {}}>
              {total_likes} others{' '}
            </Text13>
            <Text13 textColor="light900">
              liked{' '}
              <Text13
                variant="semibold"
                textColor="light900"
                onPress={() => {}}
              >
                {`${postOwner}'s`}
              </Text13>{' '}
              post.{' '}
            </Text13>
            {data[0].time}
          </Text13>
        </Box>
      </HStack>

      <Box h="$11" w="$11">
        <PressImage alt={'test'} uri={post_url} />
      </Box>
    </HStack>
  );
};

export default LikeGrouped;
