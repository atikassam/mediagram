import React from 'react';
import {
  Input,
  InputSlot,
  InputIcon,
  SearchIcon,
  InputField,
  Box,
  Center
} from '@gluestack-ui/themed';

export type InputProps = {
  placeHolder: string;
  rightIcon?: any;
  leftIcon?: any;
  variant?: 'outline' | 'underlined' | undefined;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  color?: string;
  bg?: string;
  h?: any;
  iconBg?: string;
  rounded?: any;
  [at: string]: any;
};

const CustomInput = (props: InputProps) => {
  const {
    leftIcon,
    rightIcon,
    onPressLeftIcon,
    onPressRightIcon,
    placeHolder,
    isDisabled,
    isReadOnly,
    isInvalid,
    bg = '#EAEAEB',
    iconBg = 'transparent',
    h = '$9',
    rounded = 10,
    variant = 'outline',
    color = '$textLight900',
    ...rest
  } = props;
  return (
    <Input
      variant={variant}
      size="md"
      h={h}
      flex={1}
      rounded={rounded}
      bg={bg}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      {...rest}
    >
      {leftIcon && (
        <InputSlot onPress={onPressLeftIcon}>
          <Center
            w={h}
            h={h}
            p="$1"
            mr={iconBg !== 'transparent' ? '-$1.5' : '-$2.5'}
          >
            <Center bg={iconBg} rounded="$full" w="$full" h="$full">
              <InputIcon as={leftIcon ? leftIcon : SearchIcon} />
            </Center>
          </Center>
        </InputSlot>
      )}
      <InputField
        // pl={iconBg !== 'transparent' ? '$2' : '$0'}
        color={color}
        $dark-color="$white"
        placeholder={placeHolder}
      />
      {rightIcon && (
        <InputSlot onPress={onPressRightIcon}>
          <Center
            w={h}
            h={h}
            p="$1"
            ml={iconBg !== 'transparent' ? '-$1.5' : '-$2.5'}
          >
            <Center bg={iconBg} rounded="$full" w="$full" h="$full">
              <InputIcon as={rightIcon} />
            </Center>
          </Center>
        </InputSlot>
      )}
    </Input>
  );
};

export default CustomInput;
