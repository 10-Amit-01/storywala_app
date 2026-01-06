import { View, Text, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { colors } from '../../theme/colors';

interface StepOtpProps {
  phoneNum: string;
  otp: string[];
  activeInput: number;
  error: boolean;
  inputsRef: any;
  onOtpChange: (text: string, index: number) => void;
  onKeyPress: (e: any, index: number) => void;
  onResendOtp: () => void;
  onLogin: () => void;
  onChangeNumber: () => void;
  setActiveInput: (index: number) => void;
}

const StepOtp: React.FC<StepOtpProps> = ({
  phoneNum,
  otp,
  activeInput,
  error,
  inputsRef,
  onOtpChange,
  onKeyPress,
  onChangeNumber,
  setActiveInput,
}) => {
  return (
    <>
      <Text style={[GlobalStyles.heading, styles.sectionTitle]}>
        Verification
      </Text>

      <View style={styles.subtitleContainer}>
        <View style={styles.subtitleInnerContainer}>
          <Text style={[GlobalStyles.text, GlobalStyles.leftText]}>
            We have sent an SMS with a code on mobile number ******
            {phoneNum.slice(6)}?{' '}
            <Text
              style={[GlobalStyles.text, GlobalStyles.underlineText]}
              onPress={onChangeNumber}
            >
              Change Number
            </Text>
          </Text>
        </View>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <LinearGradient
            key={index}
            colors={
              error
                ? ['#FF4D4D', '#FF0000']
                : activeInput === index
                ? colors.gradients.primary
                : ['#FFFFFF', '#FFFFFF']
            }
            style={styles.gradientBox}
          >
            <TextInput
              ref={ref => {
                inputsRef.current[index] = ref;
                return undefined;
              }}
              style={[styles.otpInput]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={text => {
                if (activeInput !== index) return;
                if (/^\d?$/.test(text)) {
                  onOtpChange(text, index);
                }
              }}
              onKeyPress={e => onKeyPress(e, index)}
              onFocus={() => setActiveInput(index)}
            />
          </LinearGradient>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    textAlign: 'left',
    width: '100%',
  },
  subtitleContainer: {
    width: '100%',
    marginTop: 8,
  },
  subtitleInnerContainer: {
    width: '100%',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
  otpInput: {
    margin: 2,
    width: 45,
    height: 50,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',
  },
  otpError: {
    borderColor: 'red',
  },
  gradientBox: {
    borderRadius: 15,
  },
});

export default StepOtp;
