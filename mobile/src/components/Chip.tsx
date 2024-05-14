import { ButtonIcon, Box, ButtonText, Button } from '@gluestack-ui/themed';
import React from 'react';
import { IGTVIcon } from '../../assets/Icons';

const Chip = (props: {
  children: string;
  icon?: any;
  onPress?: () => void;
}) => {
  const { children, icon, onPress } = props;
  return (
    <Button
      variant="outline"
      borderColor="$textLight300"
      px={'$3'}
      rounded={6}
      py="$2"
      h="auto"
      onPress={onPress}
    >
      {icon && (
        <ButtonIcon
          color="$textLight900"
          as={() => <Box mr={'$2'}>{icon}</Box>}
        />
      )}
      <ButtonText color="$textLight900">{children}</ButtonText>
    </Button>
  );
};

export default Chip;
