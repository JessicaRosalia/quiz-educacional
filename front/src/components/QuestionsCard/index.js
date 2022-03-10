import React from 'react';
import { Text, View } from "react-native";
import style from './style.js';

const QuestionsCard = ({questionList}) => {
    return (
        <View style={style.containerCards}>
            {questionList?.map((question, index)=>{
                return (
                    <View style={style.questionCard} key={index}>
                        <Text style={style.descriptionCard}>{question.descricao}</Text>     
                        <Text style={style.answerCard}>Resposta correta: {question.resposta}</Text> 
                    </View>
                )
            })} 
        </View>
    )
};
export default QuestionsCard;