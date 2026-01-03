import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../styles/GlobalStyles';
import GradientButton from '../../components/ui/GradientButton';
import LogoHeading from '../../components/LogoHeading';
import IconInput from '../../components/ui/IconInput';

interface StepPhoneProps {
  phoneNum: string;
  onPhoneChange: (phone: string) => void;
  onNext: () => void;
}

const StepPhone: React.FC<StepPhoneProps> = ({
  phoneNum,
  onPhoneChange,
  onNext,
}) => {
  return (
    <>
      <LogoHeading />
      <Text style={[GlobalStyles.heading, styles.sectionTitle]}>
        Login to Continue
      </Text>

      <View style={styles.subtitleContainer}>
        <Text style={[GlobalStyles.text, GlobalStyles.leftText]}>
          Enter your phone number to continue
        </Text>
      </View>

      <IconInput
        logo={require('../../assets/icons/phone-ic.png')}
        value={phoneNum}
        placeholder="+91 Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        onChangeText={onPhoneChange}
      >
        {phoneNum.length > 0 && <Text style={GlobalStyles.inutpre}>+91</Text>}
      </IconInput>

      <GradientButton
        onPress={onNext}
        title="Login"
        style={styles.button}
        textStyle={GlobalStyles.buttonCaption}
        disabled={phoneNum.length !== 10}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    textAlign: 'left',
    width: '100%',
    marginTop: 20,
  },
  subtitleContainer: {
    width: '100%',
    marginTop: 8,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    marginVertical: 20,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#000',
    fontSize: 16,
    marginLeft: 2,
  },
});

export default StepPhone;
