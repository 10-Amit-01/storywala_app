import {
  ImageBackground,
  StyleSheet,
  FlatList,
  BackHandler,
} from 'react-native';
import { useEffect } from 'react';

import HomeContent from './HomeContent';

interface HomeProps {
  name?: string;
}

export default function Home({ name }: HomeProps) {
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  ``;
  return (
    <ImageBackground
      source={require('../../assets/images/bg-effect.png')}
      style={styles.rootContainer}
    >
      <FlatList
        data={[1]}
        renderItem={null}
        ListHeaderComponent={<HomeContent name={name} />}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
  },
});
