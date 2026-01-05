import { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList, BottomTabParamList } from './types';
import Home from '../screens/home/HomeScreen';
import SettingNavigation from '../screens/settings/SettingNavigation';
import CollectionNavigation from '../screens/collections/CollectionNavigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const USERS = [
  { id: 1, name: 'Anush', avatar: require('../assets/images/user1.png') },
  {
    id: 2,
    name: 'kanika',
    avatar: require('../assets/images/user2.png'),
  },
];

export default function HomeTabs() {
  const route = useRoute<RouteProp<RootStackParamList, 'BottomTabs'>>();
  const userId = route.params?.userId;
  console.log('userId', userId);

  const loggedUser = USERS.find(item => item.id === userId);
  const insets = useSafeAreaInsets();
  const TempHome = useCallback(
    () => <Home name={loggedUser?.name} />,
    [loggedUser],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 1,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          borderTopColor: '#fff',
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
          color: '#fff',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={TempHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={style.image}
              source={
                focused
                  ? require('../assets/icons/home-active-ic.png')
                  : require('../assets/icons/home-inactive-ic.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={style.image}
              source={
                focused
                  ? require('../assets/icons/search-active-ic.png')
                  : require('../assets/icons/search-inactive-ic.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Collection"
        component={CollectionNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              style={style.image}
              source={
                focused
                  ? require('../assets/icons/collection-active-ic.png')
                  : require('../assets/icons/collection-inactive-ic.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="You"
        component={SettingNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                loggedUser
                  ? loggedUser.avatar
                  : require('../assets//images/user1.png')
              }
              style={{
                borderWidth: focused ? 1 : 0,
                borderColor: '#fff',
                borderRadius: 50,
                height: 30,
                width: 30,

              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
});