import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CustomHeaderProps {
  left?: () => React.ReactNode;
  right?: () => React.ReactNode;
}

const IosHeader: React.FC<CustomHeaderProps> = ({ left, right }) => {
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const l = left && left();
  const r = right && right();

  return (
    <View
      style={[
        styles.container,
        {
          height: headerHeight,
          paddingTop: insets.top,
          paddingBottom:10
        },
      ]}
    >
      <View style={styles.row}>
        <View style={styles.side}>{l}</View>
        <View style={styles.side}>{r}</View>
      </View>
    </View>
  );
};

export default IosHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  side: {
    minWidth: 44, // iOS minimum touch target
    alignItems: 'center',
    justifyContent: 'center',
  },
});
