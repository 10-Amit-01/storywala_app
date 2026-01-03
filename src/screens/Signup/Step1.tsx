import { View, Text, Modal, Pressable, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';

import IconInput from '../../components/ui/IconInput';
import { theme } from '../../theme';
import LogoHeading from '../../components/LogoHeading';
import { GlobalStyles } from '../../styles/GlobalStyles';
import DateInput from '../../components/DateInput';

const genderIcons = {
  male: require('../../assets/icons/male-ic.png'),
  female: require('../../assets/icons/female-ic.png'),
  others: require('../../assets/icons/others-ic.png'),
};

const genderOptions = [
  { label: 'Male', value: 'male', icon: genderIcons.male },
  { label: 'Female', value: 'female', icon: genderIcons.female },
  { label: 'Prefer Not to say', value: 'others', icon: genderIcons.others },
];

interface UserDetails {
  firstName: string;
  lastName: string;
  phone: string;
  gender: string;
  dob: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setDob: React.Dispatch<React.SetStateAction<string>>;
  stopParentScroll: (isOpen: boolean) => void;
}

const Step1: React.FC<UserDetails> = ({
  firstName,
  lastName,
  phone,
  gender,
  dob,
  setFirstName,
  setLastName,
  setPhone,
  setGender,
  setDob,
  stopParentScroll,
}) => {
  const [openGender, setOpenGender] = useState(false);
  return (
    <>
      {/* Section Title */}
      <LogoHeading />
      <Text style={[GlobalStyles.heading, styles.heading]}>Create Account</Text>

      <Text style={[GlobalStyles.text, styles.description]}>
        Enter your details
      </Text>
      <Text style={styles.sectionTitle}>Kid Detail's</Text>

      {/* FIRST NAME */}
      <IconInput
        logo={require('../../assets/icons/user-ic.png')}
        value={firstName}
        placeholder="First Name"
        onChangeText={setFirstName}
      />

      {/* LAST NAME */}
      <IconInput
        logo={require('../../assets/icons/double-user-ic.png')}
        value={lastName}
        placeholder="Last Name"
        onChangeText={setLastName}
      />

      {/* PHONE */}
      <IconInput
        logo={require('../../assets/icons/phone-ic.png')}
        value={phone}
        placeholder="+91 Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
        onChangeText={setPhone}
      >
        {phone.length > 0 && <Text style={GlobalStyles.inutpre}>+91</Text>}
      </IconInput>

      {/* DOB INPUT */}
      <DateInput
        dob={dob}
        setDob={setDob}
        stopParentScroll={stopParentScroll}
      />

      {/* GENDER */}
      <Pressable onPress={() => setOpenGender(true)}>
        <IconInput
          logo={
            gender
              ? genderOptions.find(item => item.label === gender)?.icon
              : require('../../assets/icons/square-user-ic.png')
          }
          value={gender}
          placeholder="Select Gender"
          editable={false}
          children={
            <Image
              source={require('../../assets/icons/grey-down-chevron-ic.png')}
            />
          }
          childrenPos="right"
        />
      </Pressable>

      {/* GENDER MODAL */}
      <Modal transparent visible={openGender} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {genderOptions.map(g => (
              <Pressable
                key={g.label}
                style={styles.modalOption}
                onPress={() => {
                  setGender(g.label);
                  setOpenGender(false);
                }}
              >
                <Image source={g.icon} />
                <Text style={styles.modalText}>{g.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    color: '#fff',
    textAlign: 'left',
  },

  description: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'left',
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    color: '#fff',
    fontFamily: theme.typography.fontBold,
    width: '100%',
    textAlign: 'left',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 12,
    paddingVertical: 10,
    overflow: 'hidden',
  },

  modalOption: {
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownContainer: {
    marginTop: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    zIndex: 99,
  },

  yearHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 8,
  },

  yearBtn: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  yearText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Step1;
