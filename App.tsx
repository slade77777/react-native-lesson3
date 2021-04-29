/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CustomInput from './src/CustomInput';

export const orangeColor = '#E7421B';

const App = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);


  useEffect(() => {
    if (second > 60) {
      setMinute(minute + 1);
      setSecond(second - 60);
    }
  }, [second]);

  useEffect(() => {
    if (minute > 60) {
      setHour(hour + 1);
      setMinute(minute - 60);
    }
  }, [minute]);

  useEffect(() => {
    if (hour > 24) {
      setDay(day + 1);
      setHour(hour - 24);
    }
  }, [hour]);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{marginTop: 50}}>
        <CustomInput
          onChangeText={(val: string) => setDay(+val)}
          val={day}
          label={'day'}
          placeholder={'day'}
        />
        <CustomInput
          onChangeText={(val: string) => {
            const hourInput = +val;
            setHour(hourInput);
          }}
          label={'hour'}
          val={hour}
          placeholder={'hour'}
        />
        <CustomInput
          onChangeText={(val: string) => {
            const minuteInput = +val;
            setMinute(minuteInput);
          }}
          label={'minute'}
          val={minute}
          placeholder={'minute'}
        />
        <CustomInput
          onChangeText={(val: string) => {
            const secondInput = +val;
            setSecond(secondInput);
          }}
          val={second}
          label={'second'}
          placeholder={'second'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
