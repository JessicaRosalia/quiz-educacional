import React, { useEffect } from "react"
import * as SecureStore from 'expo-secure-store';

import { StyleSheet, View } from 'react-native';
import { getUserInfo } from "../../api/utils";

import { StackActions } from '@react-navigation/native';

const style = StyleSheet.create({
    Container: {
        backgroundColor: "#f1f1f1",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

const createNewNavigationStack = (navigation, route) => {
    navigation.dispatch(StackActions.replace(route))
}

export default function StartUp({ navigation }) {

    useEffect(async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        if (token) {
            const user = getUserInfo(token);
            if (user.user_type === "student") createNewNavigationStack(navigation, 'StudentHome');
            if (user.user_type === "professor") createNewNavigationStack(navigation, 'TeacherHome');
        } else {
            createNewNavigationStack(navigation, "Login")
        }
    })
    return (
        <View style={style.Container}>
        </View>
    )
}
