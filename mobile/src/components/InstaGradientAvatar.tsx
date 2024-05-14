import {
  VStack,
  Box,
  Avatar,
  AvatarFallbackText,
  AvatarImage
} from '@gluestack-ui/themed';
import * as React from 'react';
import { GradientLive, GradientRing } from '../../assets/Insta';
import { Text12 } from './StyledComponents';

const InstaGradientAvatar = (props: {
  onPress?: () => void;
  isLive?: boolean;
  uri: string;
  name?: string;
  dimension?: number;
  ringDistance?: number;
}) => {
  const {
    onPress,
    isLive,
    uri,
    name,
    dimension = 62,
    ringDistance = 7
  } = props;
  return (
    <VStack space="xs" alignItems="center">
      <Box position="relative" justifyContent="center" alignItems="center">
        <Box>
          {/* Gradient ring using Svg */}
          <GradientRing width={dimension} height={dimension} />
        </Box>

        <Avatar
          style={{
            width: dimension - ringDistance,
            height: dimension - ringDistance
          }}
          bgColor="$indigo300"
          position="absolute"
          borderColor="$warmGray50"
          borderWidth={0.5}
        >
          <AvatarFallbackText>{name}</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: uri
            }}
            alt={name}
          />
          {isLive && (
            <Box position="absolute" bottom={-9} $dark-borderColor="$black">
              <GradientLive />
            </Box>
          )}
        </Avatar>
      </Box>
      {name && (
        <Box>
          <Text12 textColor="light900">{name}</Text12>
        </Box>
      )}
    </VStack>
  );
};

export default InstaGradientAvatar;
