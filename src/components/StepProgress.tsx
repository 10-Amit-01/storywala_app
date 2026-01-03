import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

type Props = {
  step: number;
};

const StepProgress = React.memo(function ({ step }: Props) {
  const steps = [1, 2, 3];

  // Animated values for each step circle + connecting lines
  const scaleAnim = useRef(steps.map(() => new Animated.Value(1))).current;
  const lineAnim = useRef(steps.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    // Animate circle scale: current step pops in
    Animated.spring(scaleAnim[step - 1], {
      toValue: 1.3,
      useNativeDriver: true,
      speed: 12,
      bounciness: 6,
    }).start(() => {
      Animated.spring(scaleAnim[step - 1], {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    });

    // Animate line fill when a step is completed
    if (step > 1) {
      Animated.timing(lineAnim[step - 2], {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  }, [step]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {steps.map((s, index) => {
          const isCompleted = step > s;
          const isCurrent = step === s;
          const isUpcoming = step < s;

          const scaleStyle = {
            transform: [{ scale: scaleAnim[index] }],
          };

          return (
            <React.Fragment key={s}>
              <Animated.View style={scaleStyle}>
                {/* COMPLETED STEP */}
                {isCompleted && (
                  <View style={styles.completedOuter}>
                    <View style={styles.completedInner} />
                  </View>
                )}

                {/* CURRENT STEP */}
                {isCurrent && (
                  <View style={styles.currentOuter}>
                    <View style={styles.currentMiddle}>
                      <View style={styles.currentInner} />
                    </View>
                  </View>
                )}

                {/* UPCOMING STEP */}
                {isUpcoming && (
                  <View style={styles.upcomingOuter}>
                    <View style={styles.upcomingInner} />
                  </View>
                )}
              </Animated.View>

              {/* LINE BETWEEN STEPS */}
              {index !== steps.length - 1 && (
                <Animated.View
                  style={[
                    styles.line,
                    {
                      backgroundColor: isCompleted ? '#22bb33' : '#777',

                      width: lineAnim[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: isCompleted
                          ? ['0%', '100%']
                          : ['100%', '100%'],
                      }),
                    },
                  ]}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
});

const SIZE = 22;
const INNER = 8;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // COMPLETED STEP
  completedOuter: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#22bb33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedInner: {
    width: INNER,
    height: INNER,
    backgroundColor: '#fff',
    borderRadius: INNER / 2,
  },

  // CURRENT STEP
  currentOuter: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#22bb3355',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentMiddle: {
    width: SIZE - 6,
    height: SIZE - 6,
    backgroundColor: '#fff',
    borderRadius: (SIZE - 8) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentInner: {
    width: INNER,
    height: INNER,
    backgroundColor: '#22bb33',
    borderRadius: INNER / 2,
  },

  // UPCOMING STEP
  upcomingOuter: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 1,
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingInner: {
    width: INNER,
    height: INNER,
    backgroundColor: '#777',
    borderRadius: INNER / 2,
  },

  // LINE
  line: {
    height: 3,
    marginHorizontal: 6,
    borderRadius: 2,
    flex: 1,
  },
});

export default StepProgress;
