import { Text, Box, styled } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCustomTheme } from '../hooks/useCustomTheme';

const Back = styled(Box, {
  h: '$full',
  w: '$full',
  variants: {
    variant: {
      gray: {
        _dark: {
          bg: '#000000'
        },
        _light: {
          bg: '$trueGray50'
        }
      },
      regular: {
        _dark: {
          bg: '#000000'
        },
        _light: {
          bg: '#FFFFFF'
        }
      },
      dark: {
        bg: '$black'
      }
    }
  },
  defaultProps: {
    variant: 'regular'
  }
});

export type BackgroundProps = {
  children: any;
  disableSafeArea?: boolean;
  variant?: 'gray' | 'regular' | 'dark';
  statusBarMode?: 'light' | 'dark';
  [atr: string]: any;
} & ViewProps;

const Background = (props: BackgroundProps) => {
  const { colorMode, toggleColorMode } = useCustomTheme();
  console.log(colorMode);
  const { children, disableSafeArea, variant, statusBarMode, ...rest } = props;

  const mode = colorMode === 'dark' ? 'light' : 'dark';

  return (
    <Back {...rest} variant={variant}>
      <StatusBar style={statusBarMode ? statusBarMode : mode} />
      {!disableSafeArea && <SafeAreaView />}
      {children}
    </Back>
  );
};
export default Background;
