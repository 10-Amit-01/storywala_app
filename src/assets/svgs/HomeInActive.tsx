import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeInActive = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#D4D4D4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M5.8 9.133v8.334H2.467A1.667 1.667 0 0 1 .8 15.8V6.633L8.3.8l7.5 5.833V15.8a1.667 1.667 0 0 1-1.667 1.667H10.8V9.133h-5Z"
    />
  </Svg>
);
export default HomeInActive;
