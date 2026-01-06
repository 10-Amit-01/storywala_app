import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SearchActive = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m18 18-3.583-3.583m1.916-4.75A6.667 6.667 0 1 1 3 9.667a6.667 6.667 0 0 1 13.333 0Z"
    />
  </Svg>
);
export default SearchActive;
