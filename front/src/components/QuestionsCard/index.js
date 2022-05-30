import React from 'react';
import { Text, View, Animated, Image, TouchableOpacity } from "react-native";
import style from './style.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const QuestionsCard = ({handleLeft, handleRight, data}) => {

    function LeftActions(progress, dragX) {

        const scale = dragX.interpolate({
            inputRange:[0, 100],
            outputRange:[0, 1],
            extrapolate: 'clamp',
        })

        return (
            <View style={style.leftAction}>
                <Animated.View
                    style={{transform: [{scale}]}}
                >
                    <Image style={{width: 55, height: 55, marginLeft: 15,}} source={require("../../assets/icons/pencil.png")} />
                </Animated.View>
            </View>
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
            renderLeftActions={LeftActions}
            onSwipeableLeftOpen={handleLeft}
            renderRightActions={
                (progress, dragX) => <RightActions progress={progress} dragX={dragX} onPress={handleRight}/>
            }
        > 
            <View style={style.questionCard}>
                <Text style={style.descriptionCard}>{data?.description}</Text>     
                <Text style={style.answerCard}>Resposta correta: {data?.answerId}</Text> 
            </View> 
        </Swipeable>
    )
};
export default QuestionsCard;