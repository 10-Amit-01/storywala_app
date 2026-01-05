import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourites from './Favourites';
import FavouritesList from './FavouritesList';
import { View } from 'react-native';

import { CollectionStackParamList } from './types';

const stack = createNativeStackNavigator<CollectionStackParamList>();

export default function CollectionNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: 'Your Favourites',
          headerTransparent: true,
          headerTitleStyle: { color: '#fff' },
        }}
      />
      <stack.Screen
        name="FavouritesList"
        component={FavouritesList}
        options={{
          title: 'Your Favourites',
          headerTransparent: true,
          headerTitleStyle: { color: '#fff' },
          headerLeft: () => <View/>
        }}
      />
      
    </stack.Navigator>
  );
}
