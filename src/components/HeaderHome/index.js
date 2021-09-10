import React from "react";
import { Image, Text, View } from "react-native";
import style from "./style";


const HeaderHome = () => {

    return (
        <View>
            <View style={style.containerMenu} >
                <Image source={require('../../assets/icons/menuHamburguer.png')} />

                <Text style={style.quizName}>Quiz Educaional</Text>
            </View>

            <View>
                <Text style={style.helloText}>Olá, <Text style={style.name}>Maria</Text></Text>

            </View>
        </View>

    )
}

export default HeaderHome;