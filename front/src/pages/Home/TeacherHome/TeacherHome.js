import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CardOptions from "../../../components/CardOptions";
import HeaderHome from "../../../components/HeaderHome";
import style from "../style";

const TeacherHome = ({ navigation }) => {

    return (
        <ScrollView>
            <View style={style.containerHome}>
                <HeaderHome navigation={navigation} />
                <View style={style.containerMenus}>
                    <View style={style.cardUm}>
                        <CardOptions navigation={navigation} routeName="QuestionsDatabase">
                            <Image source={require("../../../assets/icons/prof-cadastroQuestoes.png")} />
                            <Text>Questões</Text>
                            <Text>Gerencie seu banco</Text>
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
                                <Image source={require("../../../assets/icons/prof-duelos.png")} />
                                <Text>Duelos</Text>
                                <Text>Gerencie competições</Text>
                            </CardOptions>
                        </View>
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}
export default TeacherHome;