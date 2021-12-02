import React, { useEffect } from "react"
import * as SecureStore from 'expo-secure-store';

import { StyleSheet, View } from 'react-native';
import { getUserInfo } from "../../api/utils";

const style = StyleSheet.create({
    Container: {
        backgroundColor: "#f1f1f1",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function StartUp({ navigation }) {

    useEffect(async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        if (token) {
            const user = getUserInfo(token);
            if (user.user_type === "student") navigation.navigate('StudentHome');
            if (user.user_type === "professor") navigation.navigate('TeacherHome');
        } else {
            navigation.navigate("Login")
        }
    })
    return (
        <View style={style.Container}>
        </View>
    )
}
