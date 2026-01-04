import { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { theme } from '../theme';
import GradientButton from '../components/ui/GradientButton';
import { GlobalStyles } from '../styles/GlobalStyles';
import { colors } from '../theme/colors';
import OutlineGradientButton from '../components/ui/OutlineGradientButton';

type RootStackList = {
  loginScreen: undefined;
  registerScreen: undefined;
};

type LandingScreenNavigationProp = NativeStackNavigationProp<RootStackList>;

export default function LandingScreen() {
  const [nextStep, setNextStep] = useState(true);
  const navigation = useNavigation<LandingScreenNavigationProp>();
  const insets = useSafeAreaInsets();

  function handleLogin() {
    navigation.navigate('loginScreen');
  }
  function handleRegister() {
    navigation.navigate('registerScreen');
  }

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <ImageBackground
        source={require('../assets/images/get-started-bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.85)']}
          style={StyleSheet.absoluteFillObject}
        />
        {nextStep ? (
          <>
            <View style={styles.textContainer}>
              <Text style={GlobalStyles.heading}>Adventure Awaits in</Text>
              <Text style={GlobalStyles.heading}>Every Story!</Text>
              <Text style={[GlobalStyles.text, styles.tagline]}>
                Stories that spark kid's joy.
              </Text>
            </View>
            <GradientButton
              title="Get Started"
              onPress={() => setNextStep(false)}
              disabled={false}
              style={styles.button}
              textStyle={GlobalStyles.buttonCaption}
            />
          </>
        ) : (
          <>
            <View style={styles.textContainer}>
              <Text style={GlobalStyles.heading}>
                Discover a Universe of Stories!
              </Text>
              <Text style={[GlobalStyles.text, styles.tagline]}>
                Explore, learn, and dream with stories.
              </Text>
            </View>
            <GradientButton
              title="Login"
              onPress={handleLogin}
              disabled={false}
              style={styles.button}
              textStyle={GlobalStyles.buttonCaption}
            />
            <OutlineGradientButton
              title="Claim your free stories"
              onPress={handleRegister}
              disabled={false}
              style={styles.button}
              textStyle={GlobalStyles.buttonCaption}
            />
          </>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  tagline: {
    marginTop: 5,
    color: colors.textPrimary,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
