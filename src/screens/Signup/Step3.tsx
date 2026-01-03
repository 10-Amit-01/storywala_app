import { Image, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../theme';
import IconInput from '../../components/ui/IconInput';

interface Props {
  firstName: string;
  lastName: string;
}

export default function Step3({ firstName, lastName }: Props) {
  return (
    <>
      <Text style={[GlobalStyles.heading, styles.heading]}>Create Account</Text>

      <Text style={[GlobalStyles.text, GlobalStyles.leftText, styles.text]}>
        Enter your Detail Create Account
      </Text>

      <Text
        style={[GlobalStyles.text, GlobalStyles.leftText, styles.subHeading]}
      >
        Pronounce
      </Text>

      {/* Play + Name Row */}
      <View style={styles.pronounceRow}>
        <View style={styles.playButton}>
          <Image source={require('../../assets/icons/play-ic.png')} />
        </View>

        <View style={styles.nameBox}>
          <Text style={[styles.text, styles.noMarginTop]}>
            {firstName} {lastName}
          </Text>
        </View>
      </View>

      {/* Type Name Input */}
      <IconInput
        logo={require('../../assets/icons/music-wave-ic.png')}
        placeholder="Type your name - hear it!"
      />

      {/* Avatar Section */}
      <Text
        style={[GlobalStyles.text, GlobalStyles.leftText, styles.subHeading]}
      >
        Avatar
      </Text>

      <View style={styles.avatarBox}>
        <Image
          style={styles.avatarIcon}
          source={require('../../assets/icons/camera-ic.png')}
        />
        <Text style={styles.avatarText}>Upload Profile Photo</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    textAlign: 'left',
    width: '100%',
  },

  text: {
    marginTop: 15,
    color: '#fff',
    fontWeight: '500',
  },

  subHeading: {
    marginTop: 20,
    fontFamily: theme.typography.fontBold,
    fontSize: 18,
    color: '#fff',
  },

  pronounceRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },

  playButton: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#21B8E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameBox: {
    marginLeft: 15,
    height: 44,
    justifyContent: 'center',
  },

  noMarginTop: {
    marginTop: 0,
  },

  avatarBox: {
    backgroundColor: '#21B8E8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    gap: 5,
  },

  avatarIcon: {
    height: 34,
    width: 34,
  },

  avatarText: {
    color: '#FFF',
  },
});
