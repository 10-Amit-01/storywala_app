import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface OtpTimerProps {
  onResend: () => void;
}

const OtpTimer = React.memo(({ onResend }: OtpTimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (active && secondsLeft > 0) {
      timer = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    } else if (secondsLeft === 0) {
      setActive(false);
    }

    return () => clearInterval(timer);
  }, [active, secondsLeft]);

  const handleResend = () => {
    setSecondsLeft(60);
    setActive(true);
    onResend?.();
  };

  return (
    <View style={styles.container}>
      {active ? (
        <Text style={styles.bold}>00:{secondsLeft}</Text>
      ) : (
        <Pressable
          onPress={() => {
            onResend();
            setActive(true);
            setSecondsLeft(60);
          }}
        >
          <Text style={[styles.timerText, styles.bold]}>Resend OTP</Text>
        </Pressable>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timerText: {
    color: '#ccc',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  resendText: {
    color: '#4a90e2',
    fontSize: 16,
  },
});

export default OtpTimer;
