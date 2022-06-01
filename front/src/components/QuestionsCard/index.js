import React from 'react';
import { Text, View, Animated, Image, TouchableOpacity, Alert } from "react-native";
import style from './style.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Ionicons} from 'react-native-vector-icons';

const QuestionsCard = ({handleLeft, handleRight, data}) => {

    const renderLeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange:[0, 100],
            outputRange:[0, 1],
            extrapolate: 'clamp',
        });

        return (
            <TouchableOpacity onPress={handleLeft}>
                <View style={style.leftAction}>
                    <Animated.View style={{transform: [{scale}]}}>
                        <Image style={{width: 65, height: 65, marginLeft: 0,}} source={require("../../assets/icons/pencil.png")} />
                    </Animated.View>
                </View>
            </TouchableOpacity>
        );
    };

    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        });

        return (
            <TouchableOpacity onPress={handleRight}>
            <View style={style.rightAction}>
                <Animated.View style={{transform: [{scale}]}}>
                    <Image style={{width: 65, height: 65, marginRight: 0,}} source={require("../../assets/icons/remove.png")} />
                </Animated.View>
            </View>
            </TouchableOpacity>
        );
      };

    return (
        <Swipeable
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}
        > 
            <View style={style.questionCard}>
                <Image
                    style={style.questionCategory}
                    source={require("../../assets/icons/estudante-historico.png")}
                />
                <Text style={style.questionDescription}>{data?.description}</Text>
                <Ionicons
                    name="chevron-forward"
                    size={30}
                    color="#0C066B"
                    onPress={() => Alert.alert("Em construção")}
                /> 
            </View> 
        </Swipeable>
    )
};
export default QuestionsCard;