import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeActive = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M5 8.333v8.334H1.667A1.667 1.667 0 0 1 0 15V5.833L7.5 0 15 5.833V15a1.666 1.666 0 0 1-1.667 1.667H10V8.333H5Z"
    />
  </Svg>
);
export default HomeActive;
