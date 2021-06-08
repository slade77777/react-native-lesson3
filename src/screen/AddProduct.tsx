import React, {useState} from 'react';
import {TextInput, View, Text, Alert} from 'react-native';
import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';
import {baseUrl} from '../constant';

export const AddProduct = () => {
  const queryClient = useQueryClient();

  const url = `${baseUrl}product`;
  const mutation = useMutation(newTodo => axios.post(url, newTodo), {
    onSuccess: () => {
      Alert.alert('đã thêm');
      queryClient.invalidateQueries('products');
    },
  });

  console.log(mutation);

  const submit = () => {
    // @ts-ignore
    mutation.mutate({
      name: `ten so ${Math.random()}`,
      cost: `cost so ${Math.random()}`,
      manufacturer: `manufacturer so ${Math.random()}`,
    });
  };

  return (
    <View>
      <Text onPress={() => submit()}>Submit</Text>
    </View>
  );
};
