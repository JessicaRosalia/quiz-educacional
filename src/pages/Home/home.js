import React from "react";
import { Image, Text, View } from "react-native";
import CardOptions from "../../components/CardOptions";
import HeaderHome from "../../components/HeaderHome/";
import style from "../../components/HeaderHome/style";

const Home = ()=>{

    return(
        <View style={style.containerHome}>
            <HeaderHome/>

            <CardOptions>
                <Image source={require("../../assets/icons/prof-cadastroQuestoes.png")}/>
                <Text>Questões</Text>
                <Text>Gerenciar banco</Text>
            </CardOptions>

            <CardOptions>
                <Image source={require("../../assets/icons/prof-busca.png")} />
                <Text>Busca</Text>
                <Text>Buscar por colegas, professores</Text>
            </CardOptions>

            <CardOptions>
                <Image source={require("../../assets/icons/prof-duelos.png")} />
                <Text>Duelos</Text>
                <Text>Gerenciar competições</Text>
            </CardOptions>

        </View>
    )
}
export default Home;