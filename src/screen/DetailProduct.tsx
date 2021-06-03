import React, {useEffect, useState} from "react";
import {View, Text, Alert, TouchableOpacity} from "react-native";
import {useRoute, useNavigation} from '@react-navigation/native'
import {useQueryProductDetail} from "../queryHook/useQueryProductDetail";

export const DetailProduct: React.FC = () => {
    const {params} = useRoute();
    const navigation = useNavigation();
    const [productId, setProductId] = useState<number>(+params?.id);
    const {data} = useQueryProductDetail(productId);
    const product = data?.data;

    return (
        <View>
            <Text>{product?.id}</Text>
            <Text>{product?.name}</Text>
            <Text>{product?.cost}</Text>
            <Text>{product?.manufacturer}</Text>
            <TouchableOpacity onPress={() => setProductId(productId + 1)}>
                <Text>next</Text>
            </TouchableOpacity>
        </View>
    )
}
