import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { theme } from '../theme';
type Props = {
  title: string;
  price: string;
  subtitle: string;
  options: { label: string; value: string }[];
  selectedOption: string;
  onSelect: (option: string) => void;
  children?: React.ReactNode;
};

const PlanCard = React.memo(function ({
  title,
  price,
  subtitle,
  options,
  selectedOption,
  onSelect,
  children,
}: Props) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.rowBetween}>
        <Text style={styles.planTitle}>{title}</Text>
        <Text style={styles.planPrice}>{price}</Text>
      </View>

      <Text style={styles.subText}>{subtitle}</Text>

      {/* Options */}
      {options.map(item => (
        <TouchableOpacity
          key={item.value}
          style={styles.optionRow}
          onPress={() => onSelect(item.value)}
        >
          {selectedOption === item.value ? (
            <Image
              style={styles.checkboxIcon}
              source={require('../assets/icons/Input-checked-ic.png')}
            />
          ) : (
            <View style={styles.checkboxEmpty} />
          )}

          <Text style={styles.optionText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginTop: 15,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  planTitle: {
    color: '#000',
    fontSize: theme.typography.sizes.xl,
  },

  planPrice: {
    color: '#34C759',
    fontSize: theme.typography.sizes.md,
  },

  subText: {
    color: '#737373',
    fontSize: theme.typography.sizes.sm,
    marginTop: 5,
  },

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 12,
  },

  optionText: {
    fontWeight: '500',
  },

  checkboxIcon: {
    width: 16,
    height: 16,
  },

  checkboxEmpty: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default PlanCard;
