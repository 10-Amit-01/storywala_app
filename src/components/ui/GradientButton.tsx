import React from 'react';
import {
  Text,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { colors } from '../../theme/colors';
import { theme } from '../../theme';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const GradientButton = React.memo(function ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}: GradientButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.btnContainer, style]}
      android_ripple={{ color: '#fff', foreground: true }}
    >
      <LinearGradient
        colors={
          disabled
            ? ['#555', '#555']
            : [colors.gradients.primary[1], colors.gradients.primary[0]]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          { ...styles.gradientButton },
          disabled && { ...GlobalStyles.disabled },
        ]}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  btnContainer: { overflow: 'hidden', borderRadius: 12 },
  gradientButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: theme.typography.fontRegular,
    fontSize: theme.typography.sizes.md,
  },
});

export default GradientButton;
