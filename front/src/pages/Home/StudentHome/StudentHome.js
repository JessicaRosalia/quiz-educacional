import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import CardOptions from "../../../components/CardOptions";
import HeaderHome from "../../../components/HeaderHome";
import style from "../style";

const StudentHome = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={style.containerHome}>
                    <HeaderHome />
                    <View style={style.containerMenus}>
                        <View style={style.cardUm}>
                            <CardOptions>
                                <Image source={require("../../../assets/icons/estudante-historico.png")} />
                                <Text>Histórico</Text>
                                <Text>Veja seu histórico de partidas</Text>
                            </CardOptions>
                        </View>
                        <View style={style.cardDois}>
                            <CardOptions>
                                <Image source={require("../../../assets/icons/prof-estudante-busca.png")} />
                                <Text>Busca</Text>
                                <Text>Busque por colegas, professores</Text>
                            </CardOptions>
                            <View style={style.cardTres}>
                                <CardOptions >
                                    <Image source={require("../../../assets/icons/estudante-jogar.png")} />
                                    <Text>Jogar</Text>
                                    <Text>Jogue com amigos</Text>
                                </CardOptions>
                            </View>
                        </View>
                    </View>
                </View >
            </ScrollView>
        </SafeAreaView>
    )
}
export default StudentHome;