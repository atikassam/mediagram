import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import * as React from 'react';

type CustomThemeContextType = {
  colorMode?: 'dark' | 'light';
  toggleColorMode?: () => void;
};
export const CustomThemeContext = React.createContext<CustomThemeContextType>({
  colorMode: 'light',
  toggleColorMode: () => {}
} as any);

export default function ThemeProvider(props: { children: any }) {
  const { children } = props;
  const [colorMode, setColorMode] = React.useState<'dark' | 'light'>('light');

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <GluestackUIProvider config={config} colorMode={colorMode}>
      <CustomThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        {children}
      </CustomThemeContext.Provider>
    </GluestackUIProvider>
  );
}
