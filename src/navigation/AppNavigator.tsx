import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/Login/Login';
import SignUp from '../screens/Signup/Signup';
import HomeTabs from './BottomNavigation';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="startingScreen"
          component={LandingScreen}
          options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={() => ({
            title: '',
            headerTransparent: true,
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="registerScreen"
          component={SignUp}
          options={() => ({
            title: '',
            headerTransparent: true,
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="home"
          component={HomeTabs}
          options={() => ({
            headerShown: false,
            animation: 'fade_from_bottom',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
