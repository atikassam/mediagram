import { HStack, Box } from '@gluestack-ui/themed';
import * as React from 'react';
import CustomAvatar from './CustomAvatar';
import PressImage from './PressImage';
import { Text13 } from './StyledComponents';
import { OthersFollowing } from './OthersFollowing';
import { LikedPosts } from './LikedPosts';

export type ReactionTailProps = {
  data: any;
  variant?:
    | 'like'
    | 'comment'
    | 'mentioned'
    | 'follow'
    | 'likedComment'
    | undefined;
  post_url: string;
};

const accountHolder = '@Loki_asgard';
const postOwner = 'Aladin';

export const FollowingReactionTail: React.FC<ReactionTailProps> = (props) => {
  const { data, post_url, variant = 'like' } = props;

  return variant === 'follow' ? (
    <OthersFollowing data={data} post_url={post_url} />
  ) : variant === 'like' ? (
    <LikedPosts data={data} post_url={post_url} />
  ) : (
    <CommentHolder data={data} post_url={post_url} variant={variant} />
  );
};

const CommentHolder: React.FC<ReactionTailProps> = (props) => {
  const { data, post_url, variant = 'like' } = props;

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

        <HStack flexDirection="row" justifyContent="space-between" flex={1}>
          {/* middle */}
          <Box minHeight="$11" justifyContent="center">
            {variant === 'mentioned' ? (
              <ReactionText data={data} variant="mentioned" />
            ) : variant === 'likedComment' ? (
              <ReactionText data={data} variant="likedComment" />
            ) : (
              <ReactionText data={data} variant="comment" />
            )}
          </Box>

          {/* end */}
          <Box h="$11" w="$11">
            <PressImage alt={post_url} uri={post_url} />
          </Box>
        </HStack>
      </HStack>
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
          {variant === 'mentioned' ? (
            <>
              mentioned{' '}
              <Text13
                variant="semibold"
                textColor="light900"
                onPress={() => {
                  console.log(data.username);
                }}
              >
                {postOwner}{' '}
              </Text13>
              in a comment:{' '}
            </>
          ) : variant === 'likedComment' ? (
            <>
              liked{' '}
              <Text13
                variant="semibold"
                textColor="light900"
                onPress={() => {
                  console.log(data.username);
                }}
              >
                {`${postOwner}'s`}{' '}
              </Text13>
              Comment:{' '}
            </>
          ) : (
            <>
              commented on{' '}
              <Text13
                variant="semibold"
                textColor="light900"
                onPress={() => {
                  console.log(data.username);
                }}
              >
                {`${postOwner}'s`}{' '}
              </Text13>
              Post:{' '}
            </>
          )}
        </Text13>
        {variant === 'mentioned' && (
          <Text13 variant="semibold" textColor="regular" onPress={() => {}}>
            {`@${postOwner}`}{' '}
          </Text13>
        )}
        <Text13 textColor="light900">{data.comment} </Text13>
        {data.time}
      </Text13>
    </Box>
  );
};
