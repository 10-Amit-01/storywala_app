import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Text,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  BackHandler,
} from 'react-native';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

import StepPhone from './Step1';
import StepOtp from './Step2';
import StepSelectUser from './Step3';
import { GlobalStyles } from '../../styles/GlobalStyles';
import GradientButton from '../../components/ui/GradientButton';
import OtpTimer from '../../components/Timer';
import CustomBackButton from '../../components/CustomBackButton';

enum LoginStep {
  PHONE_INPUT = 'PHONE_INPUT',
  OTP_VERIFICATION = 'OTP_VERIFICATION',
  USER_SELECTION = 'USER_SELECTION',
}

const LoginScreen = () => {
  const [currentStep, setCurrentStep] = useState<LoginStep>(
    LoginStep.PHONE_INPUT,
  );
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  const inputs = useRef<any[]>([]);
  const [phoneNum, setPhoneNum] = useState('');
  const [error, setError] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const height = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const headerLeftComponent = useCallback(
    () => (
      <CustomBackButton
        onPress={() => {
          if (currentStep === LoginStep.OTP_VERIFICATION) {
            handleResetOtp();
            setCurrentStep(LoginStep.PHONE_INPUT);
          } else if (currentStep === LoginStep.PHONE_INPUT) {
            navigation.goBack();
          }
        }}
      />
    ),
    [currentStep, navigation],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: currentStep !== LoginStep.USER_SELECTION,
      headerLeft:
        currentStep !== LoginStep.USER_SELECTION
          ? headerLeftComponent
          : () => <View />,
    });
  }, [currentStep, navigation, headerLeftComponent]);

  const handlePhoneNumber = () => {
    if (/^\d+$/.test(phoneNum) === false || phoneNum.length !== 10) {
      return;
    }
    setCurrentStep(LoginStep.OTP_VERIFICATION);
  };

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      setActiveInput(index + 1);
      inputs.current[index + 1]?.focus();
    }
  };

  const handleChangeNumber = () => {
    setCurrentStep(LoginStep.PHONE_INPUT);
    setOtp(Array(6).fill(''));
    setError(false);
    setTimeout(() => inputs.current[0]?.blur(), 100);
    setActiveInput(0);
  };

  const handleResetOtp = () => {
    setOtp(Array(6).fill(''));
    inputs.current[0]?.focus();
    setActiveInput(0);
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const { key } = e.nativeEvent;

    if (key === 'Backspace') {
      const newOtp = [...otp];
      setError(false);

      if (otp[index] === '' && index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        setActiveInput(index - 1);
        inputs.current[index - 1]?.focus();
      } else {
        newOtp[index] = '';
        setOtp(newOtp);
        setActiveInput(index);
      }
    }
  };

  const handleLogin = () => {
    const otpNum = otp.join('');
    if (otpNum === '555555') {
      setError(true);
      return;
    }
    console.log(otp);
    setError(false);
    setCurrentStep(LoginStep.USER_SELECTION);
  };

  const handleUserSelect = (user: any) => {
    if (user.isAddNew) {
      console.log('Add new user flow');
      return;
    }
    setSelectedUser(user);
    console.log('Selected user:', user);
    navigation.navigate('home');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case LoginStep.PHONE_INPUT:
        return (
          <StepPhone
            phoneNum={phoneNum}
            onPhoneChange={text => {
              setPhoneNum(text);
            }}
            onNext={handlePhoneNumber}
          />
        );
      case LoginStep.OTP_VERIFICATION:
        return (
          <StepOtp
            phoneNum={phoneNum}
            otp={otp}
            activeInput={activeInput}
            error={error}
            inputsRef={inputs}
            onOtpChange={handleOtpChange}
            onKeyPress={handleKeyPress}
            onResendOtp={handleResetOtp}
            onLogin={handleLogin}
            onChangeNumber={handleChangeNumber}
            setActiveInput={setActiveInput}
          />
        );
      case LoginStep.USER_SELECTION:
        return (
          <StepSelectUser
            selectedUser={selectedUser}
            onUserSelect={handleUserSelect}
          />
        );
      default:
        return (
          <StepPhone
            phoneNum={phoneNum}
            onPhoneChange={setPhoneNum}
            onNext={handlePhoneNumber}
          />
        );
    }
  };

  useEffect(() => {
    const onBackPress = () => {
      if (currentStep === LoginStep.USER_SELECTION) {
        setCurrentStep(LoginStep.OTP_VERIFICATION);
        return true;
      }

      if (currentStep === LoginStep.OTP_VERIFICATION) {
        setCurrentStep(LoginStep.PHONE_INPUT);
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => subscription.remove();
  }, [currentStep]);

  return (
    <View style={[styles.safeAreaView]}>
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        style={styles.rootContainer}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[
            styles.rootContainer,
            {
              paddingTop: height === 0 ? insets.top : height,
              paddingBottom: insets.bottom,
            },
          ]}
        >
          <View style={styles.cardWrapper}>
            <View style={styles.cardContainer}>
              <View style={styles.absoluteFill} />
              <View style={styles.overlayContent}>{renderStepContent()}</View>
            </View>
          </View>
          {currentStep === LoginStep.OTP_VERIFICATION && (
            <View style={styles.otpViewContainer}>
              {error && (
                <Text style={[GlobalStyles.text, GlobalStyles.errorText]}>
                  Oops! Wrong Code
                </Text>
              )}
              {!error && (
                <View style={styles.timerContainer}>
                  <Text style={GlobalStyles.text}>Send Code Again?</Text>
                  <OtpTimer onResend={handleResetOtp} />
                </View>
              )}

              <View style={styles.confirmButtonContainer}>
                <GradientButton
                  onPress={handleLogin}
                  title="Confirm"
                  style={styles.confirmButton}
                  textStyle={GlobalStyles.buttonCaption}
                  disabled={otp.join('').length !== 6}
                />
              </View>
            </View>
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  cardWrapper: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  cardContainer: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 4, 10, 0.36)',
    paddingVertical: 30,
    paddingHorizontal: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'grey',
    maxHeight: Dimensions.get('window').height * 0.8,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  otpViewContainer: {
    width: '100%',
  },
  confirmButtonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  confirmButton: {
    marginTop: 50,
    width: '80%',
  },
  timerContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
});

export default LoginScreen;
