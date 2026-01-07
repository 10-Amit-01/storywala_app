import React from 'react';
import { Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const CustomBackButton = React.memo(({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={require('../assets/icons/gradient-left-chevron-ic.png')} />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default CustomBackButton;
