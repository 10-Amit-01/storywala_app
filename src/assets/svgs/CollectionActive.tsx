import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CollectionActive = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m10.8 2.467 3.333 11.666M7.467 2.467v11.666m-3.334-10v10M.8.8v13.333"
    />
  </Svg>
);
export default CollectionActive;
