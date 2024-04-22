import { Button, ButtonText } from '@gluestack-ui/themed';

import { Box, Text, View } from '@gluestack-ui/themed';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const DemoHome = () => {
  const navigation = useNavigation<any>();
  return (
    <Box width="100%" justifyContent="center" alignItems="center" flex={1}>
      <Button
        action={'primary'}
        variant={'solid'}
        size={'lg'}
        isDisabled={false}
        onPress={() => navigation.navigate('AddImageScreen')}
      >
        <ButtonText>Button</ButtonText>
      </Button>
    </Box>
  );
};
export default DemoHome;
