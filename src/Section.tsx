import React from "react";
import {StyleSheet, Text, useColorScheme, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const Section: React.FC<{
    title?: string;
    description?: string;
}> = ({children, title, description}) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        fontSize: 30,
                        color: 'blue',
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: 'red'
                    },
                ]}>
                {description}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'pink'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default React.memo(Section);
