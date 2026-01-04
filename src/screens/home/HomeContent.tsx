import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../styles/GlobalStyles';
import IconInput from '../../components/ui/IconInput';
import StoryCard from '../../components/StoryCard';
import { theme } from '../../theme';

const catagories = [
  {
    id: 555,
    icon: require('../../assets/icons/compass-ic.png'),
    label: 'Compass',
  },
  {
    id: 1,
    icon: require('../../assets/icons/mountain-ic.png'),
    label: 'Adventure',
  },
  {
    id: 2,
    icon: require('../../assets/icons/horror-ic.png'),
    label: 'Horror',
  },
  {
    id: 3,
    icon: require('../../assets/icons/horror-ic.png'),
    label: 'Horror',
  },
  {
    id: 4,
    icon: require('../../assets/icons/horror-ic.png'),
    label: 'Horror',
  },
];

const TopStories = [
  {
    key: 1,
    image: require('../../data/images/image-1.png'),
    heading: `Major Mooney's Comic`,
  },
];
const RecentPlay = [
  {
    key: 11,
    image: require('../../data/images/image-4.png'),
    heading: `In your own Backyard`,
  },
  {
    key: 22,
    image: require('../../data/images/image-4.png'),
    heading: `Play Wit you`,
  },
  {
    key: 33,
    image: require('../../data/images/image-5.png'),
    heading: `Maybe something Be`,
  },
];

export default function HomeContent({ name }) {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={[GlobalStyles.heading, styles.heading, { fontSize: 22 }]}>
          Welcome back, {name ? name : 'User'}
        </Text>
        <Image source={require('../../assets/icons/bell-ic.png')} />
      </View>

      <View style={styles.searchOuterContainer}>
        <IconInput
          logo={require('../../assets/icons/search-ic.png')}
          placeholder="Search.."
          style={styles.seachInput}
          containerStyle={styles.searchContainer}
          placeholderTextColor={'#fff'}
        />
      </View>

      <View
        style={{
          height: 250,
          marginHorizontal: 10,
          marginTop: 20,
          marginBottom: 50,
        }}
      >
        <Text
          style={[
            GlobalStyles.heading,
            { textAlign: 'left', marginLeft: 10, fontSize: 22 },
          ]}
        >
          Today's Story
        </Text>
        <StoryCard
          data={TopStories[0]}
          icon={require('../../assets/icons/gradient-play-ic.png')}
          cardStyle={{
            height: 250,
            width: 380,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: 10,
          }}
          textStyle={styles.storyTitle}
        />
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10}}>
        <Text
          style={[
            GlobalStyles.heading,
            {
              textAlign: 'left',
              marginLeft: 10,
              fontSize: 22,
              marginBottom: 10,
            },
          ]}
        >
          Recently Played
        </Text>
        <FlatList
          horizontal
          data={RecentPlay}
          renderItem={({ item }) => (
            <StoryCard
              data={item}
              cardStyle={{
                height: 200,
                width: 150,
                marginHorizontal: 10,
                marginTop: 5,
              }}
              textStyle={[GlobalStyles.text, { fontSize: 15 }]}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginLeft: 10,
  },
  searchOuterContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  searchContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404040',
  },
  seachInput: {
    color: '#fff',
  },
  CatListContainer: {
    marginLeft: 10,
    marginTop: 12,
    padding: 10,
  },
  compassContainer: {
    backgroundColor: '#404040',
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    flexDirection: 'row',
    marginRight: 10,
  },
  catContainer: {
    backgroundColor: '#404040',
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    height: 40,
    marginRight: 10,
    gap: 10,
  },
  catText: {
    color: '#fff',
  },
  storyTitle: {
    fontSize: 14,
    fontFamily: theme.typography.fontBold,
    color: '#fff',
  },
});
