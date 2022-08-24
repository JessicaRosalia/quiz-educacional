import React from "react";
import { Text, View } from "react-native";
import {Ionicons} from 'react-native-vector-icons';
import style from "./style";

const Header = ({navigation}) => {
    return (
        <View style={style.containerHeader}>
            <Ionicons
                style={style.iconHeader}
                name="chevron-back"
                size={35}
                color="#0C066B"
                onPress={() => navigation.navigate("TeacherHome")}
            />
            <Text style={style.titleHeader}>Banco de Questões</Text>
        </View>
    )
}
export default Header;