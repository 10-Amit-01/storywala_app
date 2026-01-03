import {
  Pressable,
  View,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../theme/colors';
import GradientText from './GradientText';
import { theme } from '../../theme';
import React from 'react';

interface OutlineGradientButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  borderWidth?: number;
}

const OutlineGradientButton = React.memo(function ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}: OutlineGradientButtonProps) {
  const gradientColors = disabled
    ? ['#777', '#555']
    : [colors.gradients.primary[1], colors.gradients.primary[0]];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.rootContainer, style]}
      android_ripple={{ color: '#ffffff40', foreground: true }}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.outerContainer}
      >
        <View style={styles.innerContainer}>
          <GradientText
            colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
            style={[styles.btnText, textStyle]}
          >
            {title}
          </GradientText>
        </View>
      </LinearGradient>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  rootContainer: { borderRadius: 16, overflow: 'hidden' },
  outerContainer: {
    padding: 2,
    borderRadius: 16,
  },
  innerContainer: {
    backgroundColor: '#000',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: theme.typography.fontRegular,
    fontSize: theme.typography.sizes.md,
  },
});

export default OutlineGradientButton;
