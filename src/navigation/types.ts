import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  StartingScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  RegisterScreen: undefined;
  BottomTabs: { userId?: number } | undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Collection: undefined;
  You: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
