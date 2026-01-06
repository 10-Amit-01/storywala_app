import React, { useEffect, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { SettingsScreenNavigationProp } from './types';

interface PaymentTransaction {
  id: string;
  date: string;
  amount: number;
  basePrice: number;
  gst: number;
  membershipPeriod: string;
  paymentMethod: string;
}

interface PaymentItemProps {
  transaction: PaymentTransaction;
}

function PaymentItem({ transaction }: PaymentItemProps) {
  return (
    <>
      <View style={styles.paymentItem}>
        {/* Date and Amount Header */}
        <View style={styles.itemHeader}>
          <Text style={styles.dateText}>{transaction.date}</Text>
          <Text style={styles.amountText}>₹{transaction.amount}</Text>
        </View>

        {/* Price Breakdown */}
        <Text style={styles.priceBreakdown}>
          ₹{transaction.basePrice}(+ ₹{transaction.gst} IGST)
        </Text>

        {/* Membership Period */}
        <Text style={styles.membershipPeriod}>
          {transaction.membershipPeriod}
        </Text>

        {/* Payment Method */}
        <View style={styles.paymentMethodContainer}>
          <Image
            source={require('../../assets/images/gpay-logo.png')}
            style={styles.googlePayIcon}
            resizeMode="contain"
          />
          <Text style={styles.paymentMethodText}>
            {transaction.paymentMethod}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );
}

export default function PaymentHistory() {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Payment History',
      headerShown: true,
    });
  }, [navigation]);

  const payments: PaymentTransaction[] = [
    {
      id: '1',
      date: '20/11/2025',
      amount: 199,
      basePrice: 150,
      gst: 40,
      membershipPeriod: 'Membership for 20/11/2025-20/12/2025',
      paymentMethod: 'e***@okhdfcbank',
    },
    {
      id: '2',
      date: '20/10/2025',
      amount: 199,
      basePrice: 150,
      gst: 40,
      membershipPeriod: 'Membership for 20/10/2025-20/11/2025',
      paymentMethod: 'e***@okhdfcbank',
    },
    {
      id: '3',
      date: '20/09/2025',
      amount: 199,
      basePrice: 150,
      gst: 40,
      membershipPeriod: 'Membership for 20/09/2025-20/10/2025',
      paymentMethod: 'e***@okhdfcbank',
    },
    {
      id: '4',
      date: '20/08/2025',
      amount: 199,
      basePrice: 150,
      gst: 40,
      membershipPeriod: 'Membership for 20/08/2025-20/09/2025',
      paymentMethod: 'e***@okhdfcbank',
    },
    {
      id: '5',
      date: '19/07/2025',
      amount: 199,
      basePrice: 150,
      gst: 40,
      membershipPeriod: 'Membership for 19/07/2025-19/08/2025',
      paymentMethod: 'e***@okhdfcbank',
    },
  ];

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
      <View style={{ marginTop: headerHeight }}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: tabBarHeight },
          ]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {payments.map(payment => (
            <PaymentItem key={payment.id} transaction={payment} />
          ))}
        </ScrollView>
      </View>
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
    paddingBottom: 20,
  },
  paymentItem: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 5,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  amountText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  priceBreakdown: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 6,
  },
  membershipPeriod: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 10,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  googlePayIcon: {
    width: 40,
    height: 16,
  },
  paymentMethodText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#262626',
    marginTop: 4,
  },
});
