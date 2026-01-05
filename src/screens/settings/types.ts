import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { BottomTabParamList, RootStackParamList } from '../../navigation/types';

export type SettingsStackParamList = {
  Settings: undefined;
  Profile: undefined;
};
export type SettingsScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SettingsStackParamList, 'Settings'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
>;
