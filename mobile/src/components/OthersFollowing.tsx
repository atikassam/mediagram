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

export type OthersFollowingProps = {
  data: any;
  post_url: string;
};

const accountHolder = '@Loki_asgard';
const followedPerson = 'NikonIndia';

export const OthersFollowing: React.FC<OthersFollowingProps> = (props) => {
  const { data, post_url } = props;

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
          <Box minHeight="$11">
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
                <Text13 textColor="light900">started following </Text13>
                <Text13
                  variant="semibold"
                  textColor="light900"
                  onPress={() => {
                    console.log(data.username);
                  }}
                >
                  {`${followedPerson}. `}
                </Text13>
                {data.time}
              </Text13>
            </Box>
          </Box>

          {/* end */}
        </HStack>
      </HStack>
    </HStack>
  );
};
