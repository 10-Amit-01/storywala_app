import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './Settings';
import Profile from './Profile';
import { SettingsStackParamList } from './types';

const stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingNavigation() {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        contentStyle: { backgroundColor: '#000' },
      }}
    >
      <stack.Screen
        name="settings"
        component={Settings}
        options={{
          headerShown: true,
          title: 'Settings',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <stack.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: true,
          title: 'My Profile',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
    </stack.Navigator>
  );
}
