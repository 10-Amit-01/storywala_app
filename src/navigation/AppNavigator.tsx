import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/login/Login';
import SignUp from '../screens/signup/Signup';
import HomeTabs from './BottomNavigation';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartingScreen"
          component={LandingScreen}
          options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={() => ({
            title: '',
            headerTransparent: true,
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={SignUp}
          options={() => ({
            title: '',
            headerTransparent: true,
            animation: 'fade_from_bottom',
          })}
        />
        <Stack.Screen
          name="BottomTabs"
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
