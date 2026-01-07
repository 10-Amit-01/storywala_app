import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useHeaderHeight } from '@react-navigation/elements';

import { RootStackParamList } from '../../navigation/types';
import GradientButton from '../../components/ui/GradientButton';
import CustomBackButton from '../../components/CustomBackButton';
import IosHeader from '../../components/IosHeader';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepProgress from '../../components/StepProgress';

export default function SignUp() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const height = useHeaderHeight();
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const scrollViewRef = useRef<ScrollView>(null);

  const HeaderLeft = useCallback(
    () => (
      <CustomBackButton
        onPress={() => {
          if (step === 3) {
            setStep(2);
          } else if (step === 2) {
            setStep(1);
          } else {
            navigation.goBack();
          }
        }}
      />
    ),
    [step, setStep, navigation],
  );

  const HeaderRight = useCallback(
    () => (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => {
          setStep(3);
        }}
      >
        <Text style={styles.skipText}>Skip</Text>
        <View style={styles.skipArrows}>
          <Image source={require('../../assets/icons/right-chevron-ic.png')} />
          <Image source={require('../../assets/icons/right-chevron-ic.png')} />
        </View>
      </TouchableOpacity>
    ),
    [step],
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: step !== 1 ? HeaderLeft : () => <View />,
      headerRight: step === 2 ? HeaderRight : undefined,
      header: () =>
        Platform.OS === 'ios' && (
          <IosHeader left={step > 1 && HeaderLeft} right={step ===2 && HeaderRight} />
        ),
    });
  }, [navigation, step, HeaderRight, HeaderLeft]);

  useEffect(() => {
    const onBackPress = () => {
      if (step === 2) {
        setStep(1);
        return true;
      }

      if (step === 3) {
        setStep(2);
        return true;
      }

      navigation.goBack();
      return true;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => subscription.remove();
  }, [step]);

  return (
    <View style={[styles.rootContainer]}>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        style={styles.rootContainer}
      >
        <View
          style={[
            styles.container,
            {
              paddingTop: height === 0 ? insets.top : height,
              paddingBottom: insets.bottom,
            },
          ]}
        >
          <View style={styles.cardContainer}>
            <ScrollView
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
              scrollEnabled={scrollEnabled}
              keyboardShouldPersistTaps="handled"
            >
              {step > 1 && <StepProgress step={step} />}
              {/* STEP RENDERING */}
              {step === 1 && (
                <Step1
                  firstName={firstName}
                  lastName={lastName}
                  phone={phone}
                  gender={gender}
                  dob={dob}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setPhone={setPhone}
                  setGender={setGender}
                  setDob={setDob}
                  stopParentScroll={(isOpen: boolean) => {
                    setScrollEnabled(!isOpen);

                    if (isOpen) {
                      scrollViewRef.current?.scrollTo({
                        y: 200,
                        animated: true,
                      });
                    }
                  }}
                />
              )}

              {step === 2 && <Step2 />}

              {step === 3 && (
                <Step3 firstName={firstName} lastName={lastName} />
              )}

              <View style={styles.buttonWrapper}>
                {step === 1 && (
                  <GradientButton
                    title="Confirm"
                    onPress={() => {
                      setStep(prevStep => prevStep + 1);
                    }}
                    style={styles.button}
                    textStyle={styles.buttonText}
                  />
                )}

                {step === 2 && (
                  <GradientButton
                    title="Confirm"
                    onPress={() => setStep(step + 1)}
                    style={styles.button}
                    textStyle={styles.buttonText}
                  />
                )}

                {step === 3 && (
                  <GradientButton
                    title="Done"
                    onPress={() => {
                      navigation.navigate('BottomTabs');
                    }}
                    style={styles.button}
                    textStyle={styles.buttonText}
                  />
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,10,0.36)',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },

  buttonWrapper: {
    marginTop: 20,
  },

  button: {
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
  },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  skipText: { color: '#fff' },
  skipArrows: { flexDirection: 'row', marginLeft: 5 },
});
