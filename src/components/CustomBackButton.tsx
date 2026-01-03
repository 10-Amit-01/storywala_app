import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const CustomBackButton = React.memo(({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={require('../assets/icons/gradient-left-chevron-ic.png')} />
    </TouchableOpacity>
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
