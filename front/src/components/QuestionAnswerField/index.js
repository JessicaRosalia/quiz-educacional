import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";

function QuestionAnswerField({option, answer}) {

     function handleAnswer(){
             if(option.id === answer) Alert.alert("RESPOSTA CORRETA!")
    }

    return (
        <TouchableOpacity style={style.button} onPress={handleAnswer}>
            <Text style={style.textButton}>{option.body}</Text>
        </TouchableOpacity>
    )
}
export default QuestionAnswerField;