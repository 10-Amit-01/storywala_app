import { useCallback, useState } from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Swipeable } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CollectionScreenNavigationProp } from './types';

const historyData = [
  {
    id: 1,
    image: require('../../data/images/image-4.png'),
    title: 'In your backyard',
    genre: 'Children',
    time: '2 days ago',
  },
  {
    id: 2,
    image: require('../../data/images/image-2.png'),
    title: 'In the library',
    genre: 'Horror',
    time: '2 days ago',
  },
  {
    id: 3,
    image: require('../../data/images/image-3.png'),
    title: 'May be something better',
    genre: 'Adventure',
    time: '2 days ago',
  },
];

export default function Favourites() {
  const headerHeight = useHeaderHeight();
  const [history, setHistory] = useState(historyData);
  const navigation = useNavigation<CollectionScreenNavigationProp>();

  const handleDelete = (id: number) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  useFocusEffect(
      useCallback(() => {
        const onBackPress = () => {
          navigation.navigate('home');
          return true;
        };
  
        const subscription = BackHandler.addEventListener(
          'hardwareBackPress',
          onBackPress,
        );
  
        return () => subscription.remove();
      }, [navigation]),
    );

  return (
    <View style={styles.rootContainer}>
      <View style={[{ paddingTop: headerHeight }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('favouritesList')}
          style={{
            margin: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../data/images/image-1.png')}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                justifyContent: 'center',
              }}
            >
              <Text style={styles.text}>Liked Stories</Text>
              <Text style={[styles.text, { fontSize: 14 }]}>35 Stories</Text>
            </View>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
        </TouchableOpacity>

        <Text
          style={[styles.text, { margin: 12, fontSize: 20, fontWeight: '600' }]}
        >
          History
        </Text>
      </View>
      <FlatList
        data={history}
        keyExtractor={item => item.id.toString()}
        renderItem={item => (
          <>
            <Swipeable
              renderRightActions={() => (
                <TouchableOpacity
                  onPress={() => handleDelete(item.item.id)}
                  style={styles.deleteButton}
                >
                  <MaterialIcons name="delete" size={30} color="#fff" />
                </TouchableOpacity>
              )}
            >
              <TouchableOpacity
                style={{
                  margin: 12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#1E1E1E',
                  height: 102,
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={item.item.image}
                    style={{ width: 80, height: 80, borderRadius: 10 }}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 10,
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.text}>{item.item.title}</Text>
                    <Text style={[styles.text, { fontSize: 14 }]}>
                      {item.item.genre}
                    </Text>
                  </View>
                </View>
                <Text style={styles.text}>{item.item.time}</Text>
              </TouchableOpacity>
            </Swipeable>
            <View style={{ height: 1, backgroundColor: '#666' }} />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 101,
    marginVertical: 'auto',
  },
});
