import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import Navigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* <Box width="100%" justifyContent="center" alignItems="center" flex={1}>
          <Text>Open up App.js to start working on your app!</Text>
        </Box> */}
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
