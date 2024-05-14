import * as React from 'react';
import { IconStyle, RoundButtonStyle } from './StyledComponents';
import { Box, ButtonIcon } from '@gluestack-ui/themed';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const IconButton = (props: {
  onPress?: () => void;
  icon: any;
  color?: string;
}) => {
  const { onPress, icon, color = '$textLight900' } = props;
  return (
    <RoundButtonStyle onPress={onPress}>
      <IconStyle w={'$7'} h="$7" color={color} as={icon} />
    </RoundButtonStyle>
  );
};

export default IconButton;
