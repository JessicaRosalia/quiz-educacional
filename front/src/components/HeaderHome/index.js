import React, { useState, useEffect } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import style from "./style";
import * as SecureStore from 'expo-secure-store';
import { getUserInfo } from "../../api/utils";
import { capitalize } from "../utils";


const HeaderHome = ({ navigation }) => {

    const [nome, setNome] = useState("");

    useEffect(async () => {
        const token = await SecureStore.getItemAsync("auth-token");
        const user = getUserInfo(token);
        setNome(capitalize(user.name));
    })



    const sair = async () => {
        await SecureStore.deleteItemAsync("auth-token").then(() => {
            navigation.navigate("Login");
        })
    }

    return (
        <View>
            <View style={style.containerMenu} >
                <Image source={require('../../assets/icons/menuHamburguer.png')} />

                <Text style={style.quizName}>Quiz Educacional</Text>

                <TouchableOpacity style={style.logout} onPress={() => sair()}><Text style={style.logoutText}>Sair</Text></TouchableOpacity>
            </View>



            <View>
                <Text style={style.helloText}>Olá, <Text style={style.name}>{nome}!</Text></Text>
                <Text style={style.subtitleText}>O que você quer fazer hoje?</Text>

            </View>
        </View>

    )
}

export default HeaderHome;