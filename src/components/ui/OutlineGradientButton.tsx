import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Text as SvgText } from 'react-native-svg';
import { theme } from '../../theme';

interface NeonOutlineButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

const HEIGHT = 44;
const RADIUS = 12;
const STROKE = 2;

const NeonOutlineButton = React.memo(function ({
  title,
  onPress,
  style,
  disabled = false,
}: NeonOutlineButtonProps) {
  const id = React.useId();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.wrapper, style]}
    >
      <Svg
        width="100%"
        height={HEIGHT}
        viewBox={`0 0 300 ${HEIGHT}`}
        preserveAspectRatio="none"
      >
        <Defs>
          <LinearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#00FFD1" />
            <Stop offset="100%" stopColor="#00A3FF" />
          </LinearGradient>

          <LinearGradient id={`${id}-text`} x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#7CFFF4" />
            <Stop offset="100%" stopColor="#4FC3FF" />
          </LinearGradient>
        </Defs>

        {/* BORDER */}
        <Rect
          x={STROKE / 2}
          y={STROKE / 2}
          width={300 - STROKE}
          height={HEIGHT - STROKE}
          rx={RADIUS}
          ry={RADIUS}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={STROKE}
        />

        {/* TEXT */}
        <SvgText
          x="150"
          y={HEIGHT / 2 + 6} // vertical center adjustment
          textAnchor="middle"
          fontSize="16"
          fontWeight="300"
          fill={`url(#${id}-text)`}
          fontFamily={theme.typography.fontRegular}
        >
          {title}
        </SvgText>
      </Svg>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    width: '90%',
  },
});

export default NeonOutlineButton;
