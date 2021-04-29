import React, {ReactNode} from "react";
import {View, Text} from "react-native";

const ForgotPassword: React.FC = ({children} : {children?: ReactNode}) => {
    return (
        <View style={{
            height: 60,
            borderRadius: 10,
            marginVertical: 10,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center'}}>
            {children}
        </View>
    )
}

export default ForgotPassword;
