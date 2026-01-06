import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from './Settings';
import Profile from './Profile';
import Payment from './Payment';
import PaymentHistory from './PaymentHistory';
import { SettingsStackParamList } from './types';
import TermsAndCondition from './TermsAndCondition';

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
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          title: 'Settings',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          title: 'My Profile',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: true,
          title: 'Membership Details',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <stack.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{
          headerShown: true,
          title: 'Payment History',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
      <stack.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
        options={{
          headerShown: true,
          title: 'Terms and Condition',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
        }}
      />
    </stack.Navigator>
  );
}
