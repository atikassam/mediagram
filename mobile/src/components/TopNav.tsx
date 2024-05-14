import {
  HStack,
  Icon,
  LockIcon,
  ChevronDownIcon,
  Box,
  MenuIcon
} from '@gluestack-ui/themed';
import React from 'react';
import IconButton from './IconButton';
import PaddingBox from './PaddingBox';
import { LinkButton, Text16 } from './StyledComponents';

const TopNav = (props: {
  text: any;
  icon?: any;
  right?: number;
  left?: number;
  onPressIcon?: () => void;
  onPressText?: () => void;
}) => {
  const { icon, right, left, text, onPressIcon, onPressText } = props;
  return (
    <PaddingBox pl="$2.5" pr="$2.5" pb="$0" pt="$0">
      <HStack w="$full" h="$11" justifyContent="center" alignItems="center">
        <LinkButton onPress={onPressText}>
          <HStack alignItems="center" space={'sm'}>
            {text}
          </HStack>
        </LinkButton>
        <Box position="absolute" right={right} left={left}>
          <IconButton icon={icon} onPress={onPressIcon} />
        </Box>
      </HStack>
    </PaddingBox>
  );
};

export default TopNav;
