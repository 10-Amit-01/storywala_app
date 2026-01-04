import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { GlobalStyles } from '../styles/GlobalStyles';
import { colors } from '../theme/colors';
import GradientText from './ui/GradientText';
import { theme } from '../theme';

const LogoHeading = React.memo(function () {
  return (
    <View style={styles.headingContainer}>
      <Image
        source={require('../assets/images/login-logo.png')}
        style={styles.logo}
      />
      <GradientText
        colors={[colors.gradients.primary[0], colors.gradients.primary[1]]}
        style={[GlobalStyles.heading, styles.titleText]}
      >
        Storywala
      </GradientText>
    </View>
  );
});

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
    width: '100%',
  },
  logo: {
    width: 65,
    height: 65,
  },
  titleText: {
    fontSize: 40,
    fontFamily: theme.typography.fontExtraBold,
  },
});

export default LogoHeading;
