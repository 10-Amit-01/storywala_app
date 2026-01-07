import { useEffect, useLayoutEffect, useState } from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import IconInput from '../../components/ui/IconInput';
import { GlobalStyles } from '../../styles/GlobalStyles';
import DateInputNative from '../../components/DateInput';
import { genderOptions } from '../Signup/Step1';
import GradientButton from '../../components/ui/GradientButton';

export default function Profile() {
  const [firstName, setFirstName] = useState('Anush');
  const [lastName, setLastName] = useState('Kumar');
  const [phone, setPhone] = useState('+91 98964 83046');
  const [dob, setDob] = useState('18/09/2000');
  const [gender, setGender] = useState('Male');
  const [openGender, setOpenGender] = useState(false);
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Profile',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 8 }}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/bg-effect.png')}
      style={styles.rootContainer}
    >
      <View style={{ marginTop: headerHeight }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingBottom: tabBarHeight,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.profileImageContainer}>
            <Image
              source={require('../../assets/images/user1.png')}
              style={styles.profileImage}
            />
            <View style={styles.cameraBadge}>
              <Image
                source={require('../../assets/icons/camera-ic.png')}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#1E1E1E',
              padding: 20,
              borderRadius: 10,
              marginTop: 20,
              marginHorizontal: 8,
            }}
          >
            {/* FIRST NAME */}
            <IconInput
              logo={require('../../assets/icons/user-ic.png')}
              value={firstName}
              placeholder="First Name"
              onChangeText={setFirstName}
            />

            {/* LAST NAME */}
            <IconInput
              logo={require('../../assets/icons/user-ic.png')} // Changed to Single User Icon
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
              childrenPos="right"
            />

            {/* DOB INPUT */}
            <DateInputNative
              dob={dob}
              setDob={setDob}
              stopParentScroll={() => {}}
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
            <Modal
              transparent
              visible={openGender}
              animationType="fade"
              onRequestClose={() => setOpenGender(false)}
            >
              <Pressable
                style={styles.modalOverlay}
                onPress={() => setOpenGender(false)}
              >
                <View style={styles.modalBox}>
                  {genderOptions.map(g => (
                    <Pressable
                      key={g.label} // Added key
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
              </Pressable>
            </Modal>
            <IconInput
              logo={require('../../assets/icons/music-wave-ic.png')}
              placeholder="Type your name - hear it!"
              value="Anush"
            />
            <GradientButton
              title="Update"
              onPress={() => {}}
              disabled={false}
              style={styles.button}
              textStyle={GlobalStyles.buttonCaption}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 40,
    position: 'relative',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: '50%',
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#00D09C', // Assuming a green color from design
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1E1E1E',
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
  button: {
    marginTop: 30,
    marginHorizontal: 0,
    marginBottom: 20,
  },
});
