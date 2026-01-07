import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';

import PlanCard from '../../components/PlanCard';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { theme } from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

export default function Step2() {
  const [lifeSelected, setLifeSelected] = useState('3mon + 1mon');
  const [premiumSelected, setPremiumSelected] = useState('3mon + 1mon');

  const PREMIUM_HEIGHT = 44; // height of premium box
  const PREMIUM_RADIUS = 8; // border radius
  const premiumGradientId = 'premiumBoxGradient';

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
        {/* Premium Box replaced with SVG */}
        <View
          style={{
            marginTop: 20,
            marginRight: 8,
            borderRadius: PREMIUM_RADIUS,
          }}
        >
          <Svg
            width="100%"
            height={PREMIUM_HEIGHT}
            viewBox={`0 0 300 ${PREMIUM_HEIGHT}`}
            opacity={0.3}
          >
            <Defs>
              <SvgLinearGradient
                id={premiumGradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <Stop offset="0%" stopColor="rgba(33, 184, 232, 0.2)" />
                <Stop offset="100%" stopColor="rgba(52, 199, 89, 0.2)" />
              </SvgLinearGradient>
            </Defs>

            {/* Background rectangle with gradient */}
            <Rect
              x={0}
              y={0}
              width="100%"
              height={PREMIUM_HEIGHT}
              rx={PREMIUM_RADIUS}
              ry={PREMIUM_RADIUS}
              fill={`url(#${premiumGradientId})`}
            />
          </Svg>

          {/* Content inside premium box */}
          <View
            style={[
              styles.premiumBox,
              { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
            ]}
          >
            <View style={{ padding: 8 }}>
              <LinearGradient
                colors={[
                  theme.colors.gradients.primary[1],
                  theme.colors.gradients.primary[0],
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.update}
              >
                <View style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                  <Text style={styles.updateText}>Update</Text>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.premiumText}>Premium Only</Text>
          </View>
        </View>

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
    borderRadius: 8,
    alignItems: 'center',
    gap: 5,
  },
  update: { borderRadius: 8 },
  updateText: { color: '#fff', fontFamily: theme.typography.fontRegular },
  premiumText: { color: '#718096', fontSize: 14, marginLeft: 4 },
  infoText: { color: '#737373', marginTop: 10 },
});
