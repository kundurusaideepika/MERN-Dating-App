import React, { useState } from 'react';
import Icon from 'react-native-dynamic-vector-icons';
import {
  View,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import { isAndroid, isIPhoneXFamily } from '@freakycoder/react-native-helpers';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateHourPicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker}>
        <View style={styles.containerGlue}>
          <View style={{ width: 35, justifyContent: 'center' }}>
            <Icon
              size={25}
              name="calendar"
              color="black"
              type="SimpleLineIcons"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>Date of birth</Text>
            <TextInput
              value={date}
              placeholder="Date of birth"
              placeholderTextColor="#ccc"
              selectionColor="#757575"
              onChangeText={onChange}
              style={styles.textInputStyle}
            />
          </View>
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  showContainer: {
    marginHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  showButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 10,
    bottom: isAndroid ? 24 : isIPhoneXFamily() ? 24 : 12,
  },
  textInputStyle: {
    fontSize: 14,
    fontWeight: '800',
    right: isAndroid ? 5 : 0,
    marginTop: isAndroid ? 0 : 3,
    height: isAndroid ? 35 : null,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700',
  },
  container: {
    margin: 8,
    height: 75,
    width: '95%',
    marginTop: 0,
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerGlue: {
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
  },
  textContainer: {
    width: '90%',
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: isAndroid ? 10 : null,
  },
});

export default DateHourPicker;
