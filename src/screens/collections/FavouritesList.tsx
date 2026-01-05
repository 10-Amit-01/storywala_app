import { BackHandler, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CollectionScreenNavigationProp } from './types';
const favouritesData = [
  {
    id: 1,
    image: require('../../data/images/image-1.png'),
    title: 'Liked Stories',
  },
  {
    id: 2,
    image: require('../../data/images/image-2.png'),
    title: 'In the library',
  },
  {
    id: 3,
    image: require('../../data/images/image-3.png'),
    title: 'May be something better',
  },
  {
    id: 4,
    image: require('../../data/images/image-4.png'),
    title: 'In your backyard',
  },
  {
    id: 5,
    image: require('../../data/images/image-5.png'),
    title: 'In the library',
  },
  {
    id: 6,
    image: require('../../data/images/image-2.png'),
    title: 'In the library',
  },
];

export default function FavouritesList() {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const navigation = useNavigation<CollectionScreenNavigationProp>();

  useEffect(() => {
    const bachAction = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack();
      return true;
    })

    return () => {
      bachAction.remove();
    }
  }, []);
  return (
    <View style={[styles.rootContainer, { paddingTop: headerHeight, paddingBottom: tabBarHeight }]}>
      <FlatList
        data={favouritesData}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  itemContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginVertical:'auto',
    marginLeft:20
  },
});
