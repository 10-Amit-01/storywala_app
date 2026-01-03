import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from '../screens/home/HomeScreen';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import { RootStackParamList } from './types';

const Tab = createBottomTabNavigator();
const USERS = [
  { id: 1, name: 'Anush', avatar: require('../assets/images/user1.png') },
  {
    id: 2,
    name: 'kanika',
    avatar: require('../assets/images/user2.png'),
  },
];

export default function HomeTabs() {
  const route = useRoute<RouteProp<RootStackParamList, 'home'>>();
  const userId = route.params?.userId;
  const loggedUser = USERS.find(item => item.id === userId);
  const TempHome = useCallback(
    () => <Home name={loggedUser?.name} />,
    [loggedUser],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          elevation: 0,
          borderTopWidth: 1,
          height: 70,
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
      }}
    >
      {/* HOME */}
      <Tab.Screen
        name="Home"
        component={TempHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/home-active-ic.png')
                  : require('../assets/icons/home-inactive-ic.png')
              }
            />
          ),
        }}
      />

      {/* SEARCH */}
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/search-active-ic.png')
                  : require('../assets/icons/search-inactive-ic.png')
              }
            />
          ),
        }}
      />

      {/* COLLECTION */}
      <Tab.Screen
        name="Collection"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/collection-active-ic.png')
                  : require('../assets/icons/collection-inactive-ic.png')
              }
            />
          ),
        }}
      />

      {/* YOU */}
      <Tab.Screen
        name="You"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                loggedUser
                  ? loggedUser.avatar
                  : require('../assets//images/user-ic.png')
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
