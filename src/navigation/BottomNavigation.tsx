import { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamList, BottomTabParamList } from './types';
import SettingNavigation from '../screens/settings/SettingNavigation';
import CollectionNavigation from '../screens/collections/CollectionNavigation';
import Home from '../screens/home/HomeScreen';
import HomeActive from '../assets/svgs/HomeActive';
import SearchActive from '../assets/svgs/SearchActive';
import Search from '../assets/svgs/Search';
import Collections from '../assets/svgs/Collections';
import HomeInActive from '../assets/svgs/HomeInActive';
import CollectionActive from '../assets/svgs/CollectionActive';

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
          borderTopColor: '#525252',
          paddingTop:5
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8,
          color: '#fff',
          alignItems: 'center',
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
            <View
              style={{
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
            >
              {focused ? <HomeActive /> : <HomeInActive />}
            </View>
          ),
        }}
      />
 
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <SearchActive /> : <Search />,
        }}
      />

      <Tab.Screen
        name="Collection"
        component={CollectionNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
            >
              {focused ? <CollectionActive /> : <Collections />}
            </View>
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
