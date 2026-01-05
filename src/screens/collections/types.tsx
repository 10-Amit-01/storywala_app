import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { BottomTabParamList, RootStackParamList } from '../../navigation/types';

export type CollectionStackParamList = {
  Favourites: undefined;
  FavouritesList: undefined;
};

export type CollectionScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<CollectionStackParamList, 'Favourites'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    NativeStackNavigationProp<RootStackParamList>
  >
>;
