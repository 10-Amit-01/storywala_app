import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  startingScreen: undefined;
  loginScreen: undefined;
  registerScreen: undefined;
  home: { userId?: number } | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
