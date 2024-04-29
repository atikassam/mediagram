import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import Navigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './src/providers/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
