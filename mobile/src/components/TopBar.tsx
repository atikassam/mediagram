import { Box, HStack, ChevronDownIcon } from '@gluestack-ui/themed';
import React, { FC } from 'react';
import PaddingBox from './PaddingBox';
import {
  LinkButton,
  Text16,
  CustomButton,
  IconStyle
} from './StyledComponents';
import IconButton from './IconButton';

export type TopBarProps = {
  leftText?: string;
  leftIcon?: any;
  rightText?: string;
  rightIcon?: any;
  centerText: string;
  dropdown?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  onPressCenter?: () => void;
};

const TopBar: FC<TopBarProps> = (props) => {
  const {
    leftIcon,
    rightIcon,
    leftText,
    rightText,
    centerText,
    dropdown,
    onPressLeft,
    onPressRight,
    onPressCenter
  } = props;
  return (
    <Box h="$11" w="$full">
      <PaddingBox pt="$0" pb="$0">
        <HStack
          h={'$full'}
          w="$full"
          alignItems="center"
          justifyContent="space-between"
        >
          {leftText && (
            <LinkButton onPress={onPressLeft}>
              <Text16 variant="normal" textColor="light900">
                {leftText}
              </Text16>
            </LinkButton>
          )}
          {leftIcon && <IconButton icon={leftIcon} onPress={onPressLeft} />}

          <CustomButton
            w={'auto'}
            h="auto"
            px="$0"
            py="$0"
            bg="transparent"
            onPress={onPressCenter}
          >
            <HStack alignItems="center">
              <Text16 variant="semibold" textColor="light900">
                {centerText}
              </Text16>
              {dropdown && <IconStyle as={ChevronDownIcon} mt={3} />}
            </HStack>
          </CustomButton>

          {rightText && (
            <LinkButton onPress={onPressRight}>
              <Text16 variant="semibold" textColor="regular">
                {rightText}
              </Text16>
            </LinkButton>
          )}
          {rightIcon && <IconButton icon={rightIcon} onPress={onPressRight} />}
        </HStack>
      </PaddingBox>
    </Box>
  );
};

export default TopBar;
