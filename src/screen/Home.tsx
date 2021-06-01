import React, {useContext, useEffect, useState} from "react";
import {Text, View, ActivityIndicator} from "react-native";
import {useNavigation} from '@react-navigation/native'
import CustomButton from "../CustomButton";
import {baseUrl} from "../constant";
const axios = require('axios').default;

const Home: React.FC = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = `${baseUrl}user/1`;
        axios.get(url).then(res => {
            setUser(res.data);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            console.log(error);
        })
    }, [])

    const logout = () => {}

    if (loading) return <ActivityIndicator size="large" color="#00ff00" />

    return (
        <View>
            <Text>This is home</Text>
            <Text onPress={() => navigation.navigate('User')}>my name is {user?.name}</Text>
            <CustomButton label={'Logout'} colorCode={'red'} onPress={logout}/>
        </View>
    )
}

export default Home;
