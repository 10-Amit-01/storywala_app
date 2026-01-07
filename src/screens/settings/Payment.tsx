import React, { useEffect, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { SettingsScreenNavigationProp } from './types';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';

export default function Payment() {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const headerHeight = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Membership Details',
      headerShown: true,
    });
  }, [navigation]);

  useEffect(() => {
    const backAction = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.goBack();
      return true;
    });
    return () => {
      backAction.remove();
    };
  }, []);

  return (
    <View style={styles.rootContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: headerHeight },
        ]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* Membership Card */}
        <View style={styles.membershipCard}>
          {/* Member Since Badge */}
          <LinearGradient
            colors={[
              theme.colors.gradients.primary[1],
              theme.colors.gradients.primary[0],
            ]}
            style={styles.memberBadge}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.memberBadgeText}>
              Member since November 2025
            </Text>
          </LinearGradient>

          {/* Plan Details */}
          <View style={styles.planHeader}>
            <Text style={styles.planName}>Lite Plan</Text>
            <Text style={styles.planPrice}>₹199/mo</Text>
          </View>

          {/* Next Payment */}
          <Text style={styles.nextPaymentText}>
            Next Payment: 13 December 2025
          </Text>

          {/* Payment Method */}
          <View style={styles.paymentMethodContainer}>
            <Image
              source={require('../../assets/images/gpay-logo.png')}
              style={styles.googlePayIcon}
              resizeMode="contain"
            />
            <Text style={styles.paymentMethodText}>e***@okhdfcbank</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* View Payment History */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.historyButton}
            onPress={() => {
              navigation.navigate('PaymentHistory');
            }}
          >
            <Text style={styles.historyButtonText}>View payment history</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  membershipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  memberBadge: {
    backgroundColor: '#00D66C',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  memberBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  planName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
  },
  planPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00D66C',
  },
  nextPaymentText: {
    fontSize: 14,
    color: '#525252',
    marginBottom: 12,
    fontWeight: '600',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  googlePayIcon: {
    width: 40,
    height: 16,
  },
  paymentMethodText: {
    fontSize: 14,
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
  historyButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyButtonText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
});
