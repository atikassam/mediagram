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

export type ReactionTailProps = {
  data: any;
  variant?: 'like' | 'comment' | 'mentioned' | 'follow' | undefined;
  post_url: string;
};

const accountHolder = '@Loki_asgard';

export const ReactionTail: React.FC<ReactionTailProps> = (props) => {
  const { data, post_url, variant = 'like' } = props;
  const [FOLLOW, setFollow] = React.useState(false);
  return (
    <HStack py="$2" alignItems="center" justifyContent="space-between">
      <HStack alignItems="center" space="md">
        {/* start */}
        <CustomAvatar
          uri={data.user_uri}
          alt={data.username}
          style={{ width: 44, height: 44 }}
        />
        {/* middle */}
        {variant === 'mentioned' ? (
          <ReactionText data={data} variant="mentioned" />
        ) : variant === 'comment' ? (
          <ReactionText data={data} variant="comment" />
        ) : variant === 'follow' ? (
          <ReactionText data={data} variant="follow" />
        ) : (
          <LinkButton>
            <Text13 variant="semibold" textColor="light900">
              {data.username}{' '}
              <Text13 textColor="light900">liked your photo. </Text13>
              <Text13>{data.time}</Text13>
            </Text13>
          </LinkButton>
        )}
      </HStack>
      {/* end */}
      {variant === 'follow' ? (
        <CustomButton
          variant={FOLLOW ? 'outline' : 'solid'}
          w={90}
          h="$7"
          size={'sm'}
          pl={0}
          pr={0}
          isDisabled={false}
          onPress={() => setFollow(!FOLLOW)}
        >
          <CustomButtonText variant={FOLLOW ? 'outline' : 'solid'}>
            {FOLLOW ? 'Message' : 'Follow'}
          </CustomButtonText>
        </CustomButton>
      ) : (
        <Box h="$11" w="$11">
          <PressImage alt={post_url} uri={post_url} />
        </Box>
      )}
    </HStack>
  );
};

export const TotalLikeTail = (props: ReactionTailProps) => {
  const { post_url, data } = props;

  const total_likes = data.filter(
    (reaction: any) => reaction.like === true
  ).length;

  const recentLikes = data.slice(0, 2);

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
            <Text13 textColor="light900">liked your photo. </Text13>
            3h
          </Text13>
        </Box>
      </HStack>

      <Box h="$11" w="$11">
        <PressImage alt={'test'} uri={post_url} />
      </Box>
    </HStack>
  );
};

const ReactionText = (props: {
  data: any;
  variant: ReactionTailProps['variant'];
}) => {
  const { data, variant = 'comment' } = props;
  return (
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
          {variant === 'mentioned'
            ? 'mentioned you in a comment: '
            : variant === 'comment'
            ? 'commented on your post: '
            : variant === 'follow'
            ? 'started following you. '
            : 'liked your photo'}
        </Text13>
        {variant === 'mentioned' && (
          <Text13 variant="semibold" textColor="regular" onPress={() => {}}>
            {accountHolder}{' '}
          </Text13>
        )}
        {variant === 'comment' && (
          <Text13 textColor="light900">{data.comment} </Text13>
        )}
        {variant === 'mentioned' && (
          <Text13 textColor="light900">{data.comment} </Text13>
        )}
        3h
      </Text13>
    </Box>
  );
};
