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
import {useQueryProducts} from "../queryHook/useQueryProducts";
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const productQuery = useQueryProducts();
  const navigation = useNavigation();
  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailProduct', {id: item.id})}>
        <Text>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  if (productQuery.isLoading) {
    return <ActivityIndicator size={30} color='black'/>
  }

  return (
    <View>
      <FlatList
        data={productQuery?.data?.data || []}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      <Text onPress={() => navigation.navigate('AddProduct')} style={{ marginTop: 30}}>Thêm</Text>
    </View>
  );
};

export default Home;
