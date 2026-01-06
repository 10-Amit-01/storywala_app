import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#D4D4D4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m15.8 15.8-3.583-3.583m1.916-4.75a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
    />
  </Svg>
);
export default Search;
