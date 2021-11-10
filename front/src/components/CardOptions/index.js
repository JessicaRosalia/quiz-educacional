import React from 'react';
import { Text, View } from 'react-native';
import style from '../../components/CardOptions/style';

const CardOptions = ({children}) => {
    return (
        <View style={style.containerCard}>
            <View style={style.imageCard}>{children[0]}</View>
            <Text style={style.titleCard}>{children[1]}</Text>
            <Text style={style.subtitleCard}>{children[2]}</Text>
        </View>
    )
}

export default CardOptions;

