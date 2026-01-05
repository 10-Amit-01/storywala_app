import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  startingScreen: undefined;
  loginScreen: undefined;
  signupScreen: undefined;
  registerScreen: undefined;
  bottomTabs: { userId?: number } | undefined;
};

export type BottomTabParamList = {
  home: undefined;
  search: undefined;
  collection: undefined;
  you: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
