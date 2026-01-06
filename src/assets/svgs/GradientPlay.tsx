import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
const GradientPlay = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm4.77 12.42-7 4.5a.497.497 0 0 1-.7-.165A.499.499 0 0 1 9 16.5v-9a.5.5 0 0 1 .77-.42l7 4.5a.5.5 0 0 1 0 .84Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={24}
        x2={0}
        y1={12}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#21B8E8" />
        <Stop offset={1} stopColor="#34C759" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GradientPlay;
