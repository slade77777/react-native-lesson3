import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../CustomButton';
import {baseUrl} from '../constant';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../redux/action/productionAction';

const axios = require('axios').default;

const Home: React.FC = () => {
  const productReducer = useSelector((state: any) => state?.productReducer);
  const {products, isLoading} = productReducer;
  console.log(isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <Text>{item?.name}</Text>
      </View>
    );
  };

  if (isLoading) return <ActivityIndicator size={30} color={'black'}/>

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Home;
