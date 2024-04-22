import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthorizationScreen from './screens/public/AuthorizationScreen';
import ReAuthorizationScreen from './screens/public/ReAuthorizationScreen';
import SearchScreen from './screens/private/SearchScreen';
import AddImageScreen from './screens/private/AddImageScreen';
import CameraShortScreen from './screens/private/CameraShortScreen';
import DirectMessageScreen from './screens/private/DirectMessageScreen';
import FollowingScreen from './screens/private/FollowingScreen';
import LikesScreen from './screens/private/LikesScreen';
import LiveScreen from './screens/private/LiveScreen';
import ProfileEditScreen from './screens/private/ProfileEditScreen';
import ProfileMenuScreen from './screens/private/ProfileMenuScreen';
import ProfileScreen from './screens/private/ProfileScreen';
import ScreenPics from './screens/private/ScreenPics';
import StoryScreen from './screens/private/StoryScreen';
import TemplateScreen from './screens/private/TemplateScreen';
import DemoHome from './screens/private/DemoHome';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="AuthorizationScreen"
        component={AuthorizationScreen}
      />
      <Stack.Screen
        name="ReAuthorizationScreen"
        component={ReAuthorizationScreen}
      />
    </Stack.Navigator>
  );
};

export const SecureNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DemoHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddImageScreen" component={AddImageScreen} />
      <Stack.Screen name="CameraShortScreen" component={CameraShortScreen} />
      <Stack.Screen
        name="DirectMessageScreen"
        component={DirectMessageScreen}
      />
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
      <Stack.Screen name="LikesScreen" component={LikesScreen} />
      <Stack.Screen name="LiveScreen" component={LiveScreen} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
      <Stack.Screen name="ProfileMenuScreen" component={ProfileMenuScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ScreenPics" component={ScreenPics} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
      <Stack.Screen name="DemoHome" component={DemoHome} />
      <Stack.Screen name="TemplateScreen" component={TemplateScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const isSecure = false;
  return isSecure ? <AuthNavigation /> : <SecureNavigation />;
};

export default Navigation;
