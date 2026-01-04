import React, { useLayoutEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';

interface SettingOptionProps {
  title: string;
  icon: React.ReactNode;
  isLast?: boolean;
  onPress?: () => void;
}

function SettingOptions({ title, icon, isLast, onPress }: SettingOptionProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.optionRow}>
        <View style={styles.optionLeft}>
          {icon}
          <Text style={styles.optionText}>{title}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#666" />
      </View>
      {!isLast && <View style={styles.divider} />}
    </TouchableOpacity>
  );
}

export default function Settings() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Settings',
      headerLeft: () => <View />,
    });
  }, []);
  return (
    <ImageBackground
      source={require('../../assets/images/bg-effect.png')}
      style={styles.rootContainer}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: headerHeight },
        ]}
      >
        <View style={styles.sectionContainer}>
          <SettingOptions
            title="My Profile"
            icon={<Feather name="user" size={20} color="#fff" />}
            onPress={() => {
              navigation.navigate('profile');
            }}
          />
          <SettingOptions
            title="App Activity"
            icon={
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                size={20}
                color="#fff"
              />
            }
          />
          <SettingOptions
            title="Payment & Invoice's"
            icon={<MaterialIcons name="receipt-long" size={20} color="#fff" />}
          />
          <SettingOptions
            title="Refer to Friend"
            icon={<Feather name="user-plus" size={20} color="#fff" />}
          />
          <SettingOptions
            title="Terms & Condition"
            icon={<Feather name="file-text" size={20} color="#fff" />}
            isLast
          />
        </View>

        <TouchableOpacity activeOpacity={0.7} style={styles.logoutButton}>
          <View style={styles.optionLeft}>
            <Feather name="log-out" size={20} color="#fff" />
            <Text style={styles.optionText}>Logout</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#666" />
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Outfit-Bold', // Assuming this font exists, typically used in modern apps. If not, will fallback or use GlobalStyles if I knew them better.
  },
  sectionContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
  },
  logoutButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});
