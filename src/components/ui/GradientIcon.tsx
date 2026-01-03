import MaskedView from '@react-native-masked-view/masked-view';
import {
  LinearGradient,
  LinearGradientProps,
} from 'react-native-linear-gradient';
import { Image, ImageProps } from 'react-native';
import React from 'react';

type GradientIconProps = ImageProps & {
  colors: LinearGradientProps['colors'];
  start?: LinearGradientProps['start'];
  end?: LinearGradientProps['end'];
  locations?: LinearGradientProps['locations'];
};

const GradientIcon = React.memo((props: GradientIconProps) => {
  return (
    <MaskedView maskElement={<Image {...props} />}>
      <LinearGradient
        colors={props.colors}
        start={props.start}
        end={props.end}
        locations={props.locations}
      >
        <Image {...props} />
      </LinearGradient>
    </MaskedView>
  );
});

export default GradientIcon;
