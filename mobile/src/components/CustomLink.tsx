import { Text } from '@gluestack-ui/themed';
import * as React from 'react';
import { LinkButton, Text12 } from './StyledComponents';

const CustomLink = (props: {
  children: React.ReactElement;
  onPress?: () => void;
}) => {
  const { children, onPress } = props;
  return <LinkButton onPress={onPress}>{children}</LinkButton>;
};

export default CustomLink;
/* Sign up. */

// color: #262626;
