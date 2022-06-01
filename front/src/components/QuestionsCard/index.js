import React from 'react';
import { Text, View, Animated, Image, TouchableOpacity, Alert } from "react-native";
import style from './style.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Ionicons} from 'react-native-vector-icons';

const QuestionsCard = ({handleLeft, handleRight, data}) => {

    function LeftActions({progress, dragX, onPress}) {

        const scale = dragX.interpolate({
            inputRange:[0, 100],
            outputRange:[0, 1],
            extrapolate: 'clamp',
        })

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={style.leftAction}>
                    <Animated.View style={{transform: [{scale}]}}>
                        <Image style={{width: 55, height: 55, marginLeft: 0,}} source={require("../../assets/icons/pencil.png")} />
                    </Animated.View>
                </View>
            </TouchableOpacity>
        )
    }

    function RightActions({progress, dragX, onPress}) {

        const scale = dragX.interpolate({
            inputRange:[-100, 0],
            outputRange:[1, 0],
            extrapolate: 'clamp',
        })

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={style.rightAction}>
                    <Animated.View style={{transform: [{scale}]}}>
                        <Image style={{width: 65, height: 65, marginRight: 0,}} source={require("../../assets/icons/remove.png")} />
                    </Animated.View>
                </View>
            </TouchableOpacity>
        )

    }

    return (
        <Swipeable
            renderLeftActions={
                (progress, dragX) => <LeftActions progress={progress} dragX={dragX} onPress={handleLeft}/>
            }
            onSwipeableLeftOpen={handleLeft}
            renderRightActions={
                (progress, dragX) => <RightActions progress={progress} dragX={dragX} onPress={handleRight}/>
            }
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