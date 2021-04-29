import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {orangeColor} from '../App';

type CustomInputProps = {
  label: string;
  placeholder: string;
  val: any;
  onChangeText?: (val: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  onChangeText,
  val,
}) => {
  return (
    <View style={{marginVertical: 5}}>
      <Text style={{color: orangeColor, fontWeight: 'bold'}}>{label}</Text>
      <TextInput
        keyboardType={'numeric'}
        onChangeText={onChangeText}
        placeholder={placeholder}
        maxLength={2}
        value={val.toString()}
        style={{
          borderWidth: 0.5,
          borderColor: '#D0D0D0',
          padding: 10,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default CustomInput;
