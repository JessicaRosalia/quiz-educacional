import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from './style';

const TeacherRegistration = ({ navigation }) => {
    const [type, setType] = useState(null);

    useEffect(() => {
        if (type === "student") navigation.navigate("StudentRegistration")
        if (type === "professor") navigation.navigate("TeacherRegistration")
        setType(null);
    }, [type])

    return (
        <View style={style.Container}>
            <TouchableOpacity style={style.ContainerButton} onPress={() => setType("student")}>
                <Text style={style.registerText}>Eu sou um estudante!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.ContainerButton} onPress={() => setType("professor")}>
                <Text style={style.registerText}>Eu sou um professor!</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TeacherRegistration;