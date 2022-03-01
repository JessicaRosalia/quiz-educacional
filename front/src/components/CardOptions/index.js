import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './style';

function CardOptions({children, routeName, navigation}) {

    function goToQuestionScreen(){
        navigation.navigate(routeName);
    }
    return (
        <View style={style.containerCard}>
            <TouchableOpacity onPress={goToQuestionScreen}>
                <View style={style.imageCard}>{children[0]}</View>
                <Text style={style.titleCard}>{children[1]}</Text>
                <Text style={style.subtitleCard}>{children[2]}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardOptions;

