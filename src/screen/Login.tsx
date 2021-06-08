import React, {useContext, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import CustomButton from '../CustomButton';
import {orangeColor} from '../../App';
import {UserContext} from '../context/UserContext';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required().min(6, 'it nhat 6 ki tu'),
});

interface IFormInputs {
  name: string;
  password: string;
}

const Login: React.FC = () => {
  const user = useContext(UserContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: any) => {
    try {
      await AsyncStorage.setItem('userName', data.name);
      user.setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/*<Controller*/}
      {/*  control={control}*/}
      {/*  render={({field: {onChange, onBlur, value}}) => (*/}
      {/*    <CustomInput*/}
      {/*      label={'name'}*/}
      {/*      placeholder={'name'}*/}
      {/*      onChange={onChange}*/}
      {/*      value={value}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*  rules={{required: true}}*/}
      {/*  name={'name'}*/}
      {/*/>*/}
      {/*{errors.name && <Text>This is required.</Text>}*/}
      {/*<Controller*/}
      {/*  control={control}*/}
      {/*  render={({field: {onChange, onBlur, value}}) => (*/}
      {/*    <CustomInput*/}
      {/*      label={'password'}*/}
      {/*      placeholder={'password'}*/}
      {/*      onChange={onChange}*/}
      {/*      value={value}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*  rules={{minLength: 6}}*/}
      {/*  name={'password'}*/}
      {/*/>*/}
      {errors.password && <Text>{errors.password.message}</Text>}
      <CustomButton
        label={'submit'}
        colorCode={orangeColor}
        //@ts-ignore
        onPress={handleSubmit(submit)}
      />
    </View>
  );
};

export default Login;
