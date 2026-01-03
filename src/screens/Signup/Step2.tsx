import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import PlanCard from '../../components/PlanCard';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../theme';

export default function Step2() {
  const [lifeSelected, setLifeSelected] = useState('3mon + 1mon');
  const [premiumSelected, setPremiumSelected] = useState('3mon + 1mon');

  return (
    <>
      <Text style={[GlobalStyles.heading, styles.title]}>Choose Your Plan</Text>

      {/* LIFE PLAN */}
      <PlanCard
        title="Life Plan"
        price="₹199/mo"
        subtitle="Child's Name only"
        selectedOption={lifeSelected}
        onSelect={setLifeSelected}
        options={[
          { label: '3 months + 1 month free', value: '3mon + 1mon' },
          { label: '6 months + 6 month free', value: '6mon + 6mon' },
        ]}
      >
        <LinearGradient
          colors={['rgba(33, 184, 232, 0.2)', 'rgba(52, 199, 89, 0.2)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.premiumBox}
        >
          <LinearGradient
            colors={[
              theme.colors.gradients.primary[1],
              theme.colors.gradients.primary[0],
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.update}
          >
            <Text style={styles.updateText}>Update</Text>
          </LinearGradient>
          <Text style={styles.premiumText}>Premium Only</Text>
        </LinearGradient>
        <Text style={styles.infoText}>You can change plans anytime.</Text>
      </PlanCard>

      {/* PREMIUM PLAN */}
      <PlanCard
        title="Premium Plan"
        price="₹299/mo"
        subtitle="Child's + Parent's Names"
        selectedOption={premiumSelected}
        onSelect={setPremiumSelected}
        options={[
          { label: '3 months + 1 month free', value: '3mon + 1mon' },
          { label: 'Add-On: Inspire Habits', value: '6mon + 6mon' },
        ]}
      >
        <View style={styles.listContainer}>
          {[
            'Reduce Screen Time',
            'Healthy Eating',
            'Hygiene',
            'Obscene Control',
          ].map((item, i) => (
            <View key={i} style={styles.addonItem}>
              <View style={styles.dot} />
              <Text style={styles.addonText}>{item}</Text>
            </View>
          ))}
        </View>
      </PlanCard>
      <PlanCard
        title="Premium Plan"
        price="₹299/mo"
        subtitle="Child's + Parent's Names"
        selectedOption={premiumSelected}
        onSelect={setPremiumSelected}
        options={[
          { label: '3 months + 1 month free', value: '3mon + 1mon' },
          { label: 'Add-On: Inspire Habits', value: '6mon + 6mon' },
        ]}
      >
        <View style={styles.listContainer}>
          {[
            'Reduce Screen Time',
            'Healthy Eating',
            'Hygiene',
            'Obscene Control',
          ].map((item, i) => (
            <View key={i} style={styles.addonItem}>
              <View style={styles.dot} />
              <Text style={styles.addonText}>{item}</Text>
            </View>
          ))}
        </View>
      </PlanCard>
    </>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: 'left' },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    marginRight: 8,
  },

  addonText: {
    color: '#525252',
    fontSize: theme.typography.sizes.sm,
  },
  listContainer: {
    marginTop: 10,
  },
  addonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    marginLeft: 20,
  },
  premiumBox: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    gap: 5,
    marginTop: 20,
    marginRight: 8,
  },
  update: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  updateText: { color: '#fff', fontFamily: theme.typography.fontRegular },
  updateButton: { borderRadius: 8 },
  updateButtonText: { color: '#fff', fontSize: 15, paddingHorizontal: 18 },
  premiumText: { color: '#718096', fontSize: 14, marginLeft: 4 },
  infoText: { color: '#737373', marginTop: 10 },
});
