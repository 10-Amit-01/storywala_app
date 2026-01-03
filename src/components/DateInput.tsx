import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';

import IconInput from './ui/IconInput';

type Props = {
  dob: string;
  setDob: (s: string) => void;
  placeholder?: string;
  stopParentScroll: (isOpen: boolean) => void;
};

const BTN_BLUE = '#00A8FF';

const DateInputNative = React.memo(function ({
  dob,
  setDob,
  placeholder = 'Date of Birth',
  stopParentScroll,
}: Props) {
  const today = useMemo(() => new Date(), []);

  const parsed = useMemo(() => {
    if (!dob) return today;
    const [d, m, y] = dob.split('/').map(n => parseInt(n, 10));
    return new Date(y, m - 1, d);
  }, [dob, today]);

  const [open, setOpen] = useState(false);

  const openPicker = () => {
    stopParentScroll(true);
    setOpen(true);
  };

  const closePicker = () => {
    stopParentScroll(false);
    setOpen(false);
  };

  const handleNativeChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      // Android auto closes dialog
      if (event.type === 'set' && selectedDate) {
        setDob(dayjs(selectedDate).format('DD/MM/YYYY'));
      }
      closePicker();
    } else {
      // iOS inline/spinner
      if (selectedDate) {
        setDob(dayjs(selectedDate).format('DD/MM/YYYY'));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={openPicker}>
        <IconInput
          logo={require('../assets/icons/calender-ic.png')}
          value={dob}
          placeholder={placeholder}
          editable={false}
          iconPosition="right"
          showSoftInputOnFocus={false}
          focusable={false}
        />
      </Pressable>

      {open && (
        <>
          <DateTimePicker
            value={parsed}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            maximumDate={today}
            onChange={handleNativeChange}
          />

          {/* Only for iOS (Done button) */}
          {Platform.OS === 'ios' && (
            <View style={styles.actionsRow}>
              <TouchableOpacity onPress={closePicker} style={styles.doneBtn}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: { width: '100%' },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 8,
  },
  doneBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  doneText: {
    color: BTN_BLUE,
    fontWeight: '700',
  },
});

export default DateInputNative;
