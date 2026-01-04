import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type StoryCardData = {
  image: ImageSourcePropType;
  heading: string;
};

type StoryCardProps = {
  data: StoryCardData;
  icon?: ImageSourcePropType;
  cardStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const StoryCard = React.memo(function ({
  data,
  icon,
  cardStyle,
  textStyle,
}: StoryCardProps) {
  return (
    <View style={cardStyle}>
      <Image source={data.image} style={styles.image} />

      <View style={styles.titleContainer}>
        {icon && <Image source={icon} style={styles.logo} />}
        <Text style={textStyle} numberOfLines={1}>
          {data.heading}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  logo: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
});

export default StoryCard;
